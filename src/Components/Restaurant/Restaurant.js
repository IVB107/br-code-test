import React from 'react'
import styles from './Restaurant.module.css'

const restaurant = (props) => (
  <div className={styles.restContainer} style={{backgroundImage: `url(${props.image})`}} >
    <p className={styles.name}>{props.name}</p>
    <p className={styles.category}>{props.category}</p>
  </div>
)

export default restaurant
