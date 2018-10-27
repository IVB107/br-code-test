import React, { Component } from 'react'
import styles from './App.module.css'
import Layout from './Components/Layout/Layout'
import Feed from './Containers/Feed/Feed'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      isLoading: true,
      openDrawer: false,
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
    console.log("width: " + this.state.width)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize())
  }

  getData() {
    fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
    .then(results => results.json())
    .then(results => this.setState({ data: results, isLoading: false }))
  }

  render() {
    let feed = (
      <div className={styles.loadContainer} >
        <div className={styles.spinner} ></div>
        <p>Searching for grub...</p>
      </div>
    )
    if(!this.state.isLoading){
      feed = ( <Feed feed={this.state.data.restaurants} /> )
    }

    return (
      <Layout width={this.state.width}>
        {feed}
      </Layout >
    )
  }
}

export default App
