import React, { Component } from 'react'
import styles from './Restaurant.module.css'

class Restaurant extends Component {
  render () {
    return (
      <div
        onClick={this.props.clicked}
        className={styles.restContainer} style={{backgroundImage: `url(${this.props.image})`}} >
        <p className={styles.name}>{this.props.name}</p>
        <p className={styles.category}>{this.props.category}</p>
      </div>
    )
  }
}

export default Restaurant
