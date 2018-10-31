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
      selected: 8,
      width: window.innerWidth
    }
  }

  // TO DO:
  // 1. Add functionality to arrow button on 'header' => close menu when open
  // 2. Center/Align buttons & labels on 'footer'
  // DONE - 3. Update menu details upon restaurant selection/clicked
  // 4. Add media queries to change menu's style for wider viewports
  // 5. Add markers to Menu Map for all restaurants in 'this.state.data'

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
        feed={this.state.data.restaurants}
        clicked={(index) => this.handleSelection(index)}
        /> )
      let places = [...this.state.data.restaurants]
      let clicked = this.state.selected
      drawer = ( <Drawer
        drawerView={this.state.openDrawer}
        current={places[`${clicked}`]}
        />)
    }

    return (
      <Layout
      backBtn={this.state.openDrawer}
      isOpen={this.props.openDrawer}
      toggleDrawer={() => this.handleToggleDrawer()}
      width={this.state.width}>
        {feed}
        {drawer}
      </Layout >
    )
  }
}

export default App
