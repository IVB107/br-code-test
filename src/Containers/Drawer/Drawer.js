import React, { Component } from 'react'
import Info from '../../Components/Info/Info'
import styles from './Drawer.module.css'

class Drawer extends Component {

  render() {
    // Show proper drawer view
    let drawerView = (this.props.drawerView) ? styles.openDrawer : styles.closedDrawer

    console.log(this.props.current)

    return (
      <div className={drawerView}>
        <Info
        current={this.props.current}
        />
      </div>
    )
  }
}

export default Drawer
