import React from 'react'
import Aux from '../../hoc/Aux'
import styles from './SideDrawer.module.css'

const sideDrawer = () => (
  <Aux >
    <div className={styles.drawerContainer}>
      <div>Google Maps</div>
      <div>Restaurant + Category</div>
      <div>Restaurant Info</div>
    </div>
  </Aux >
)

export default sideDrawer
