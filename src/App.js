import React, { Component } from 'react'
import styles from './App.module.css'
import Layout from './Components/Layout/Layout'
import Feed from './Containers/Feed/Feed'
import Drawer from './Containers/Drawer/Drawer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {},
      isLoading: true,
      openDrawer: false,
      selected: 0,
      width: window.innerWidth
    }
  }

  windowResize() {
    if (this.state.width !== window.innerWidth) {
      this.setState({ width: window.innerWidth })
    }
  }
  componentDidMount() {
    this.getData()
    window.addEventListener('resize', this.windowResize())
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize())
  }
  getData() {
    fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
    .then(results => results.json())
    .then(results => this.setState({ data: results, isLoading: false }))
  }

  handleToggleDrawer = () => {
    const drawer = this.state.openDrawer
    this.setState({openDrawer: !drawer})
  }
  handleSelection = (index) => {
    // Pass user's selection to state, then down to <Drawer />
    const clicked = index
    this.setState({selected: clicked})
    this.handleToggleDrawer()
  }

  render() {
    let drawer = null
    let feed = (
      <div className={styles.loadContainer} >
        <div className={styles.spinner} ></div>
        <p>Searching for grub...</p>
      </div>
    )
    if(!this.state.isLoading){
      feed = ( <Feed
        isOpen={this.props.backBtn}
        feed={this.state.data.restaurants}
        clicked={(index) => this.handleSelection(index)}
        /> )
      let places = [...this.state.data.restaurants]
      let clicked = this.state.selected
      drawer = ( <Drawer
        onBlur={this.props.toggleDrawer}
        drawerView={this.state.openDrawer}
        current={places[`${clicked}`]}
        />)
    }

    return (
      <Layout
      backBtn={this.state.openDrawer}
      toggleDrawer={() => this.handleToggleDrawer()}
      width={this.state.width}>
        {feed}
        {drawer}
      </Layout >
    )
  }
}

export default App
