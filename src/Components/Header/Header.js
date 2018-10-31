import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import styles from './Header.module.css'

class Header extends Component {
  render () {
    // Hide back button when Map is off-screen
    const backBtn = (this.props.backBtn) ? styles.showBtn : styles.hideBtn
    const canClick = (this.props.backBtn) ? this.props.toggleDrawer : null

    return (
      <Aux >
        <div className={styles.headerContainer}>
          <div className={styles.wrapper}>
            <div
              onClick={canClick}
              className={backBtn}></div>
            <div className={styles.appName}>Lunch Tyme</div>
            <div
              onClick={this.props.toggleDrawer}
              className={styles.mapIcon}></div>
          </div>
        </div>
      </Aux >
    )
  }
}

export default Header
