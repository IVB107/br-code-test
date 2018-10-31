import React, { Component } from 'react'
import styles from './Header.module.css'

class Header extends Component {
  render () {
    // Hide back button when Map is off-screen
    const backBtn = (this.props.backBtn) ? styles.showBtn : styles.hideBtn
    const canClick = (this.props.backBtn) ? this.props.toggleDrawer : null

    return (
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
    )
  }
}

export default Header
