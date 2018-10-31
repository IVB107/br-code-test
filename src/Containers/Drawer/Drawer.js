import React, { Component } from 'react'
import Info from '../../Components/Info/Info'
import styles from './Drawer.module.css'

class Drawer extends Component {
  render() {
    // Show proper drawer view
    const drawerView = (this.props.drawerView) ? styles.openDrawer : styles.closedDrawer
    // Check for 'null' object props, vals
    const removeEmpty = (obj) => Object.entries(obj).forEach(([key, val]) => {
      if (val && typeof val === 'object') removeEmpty(val)
      else if (val == null) obj[key] = undefined
    })

    removeEmpty(this.props.current)

    // Replace null values
    let phone = (!this.props.current.contact || !this.props.current.contact.formattedPhone) ? "" : this.props.current.contact.formattedPhone

    let twitter = (!this.props.current.contact || !this.props.current.contact.twitter) ? "" : `@${this.props.current.contact.twitter}`

    return (
      <div className={drawerView}>
        <Info
          phone={phone}
          twitter={twitter}
          current={this.props.current} />
      </div>
    )
  }
}

export default Drawer
