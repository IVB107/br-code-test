import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import styles from './Header.module.css'

class Header extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     showButton: false
  //   }
  // }

  render () {

    const backBtn = (this.props.backBtn) ? styles.showBtn : styles.hideBtn

    return (
      <Aux >
        <div className={styles.headerContainer}>
          <div className={styles.wrapper}>
            <div
              // onClick={this.props.handleGoBack}
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
