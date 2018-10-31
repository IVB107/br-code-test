import React from 'react'
import styles from './Layout.module.css'
import Header from '../../Containers/Header/Header'
import Footer from '../Footer/Footer'

const layout = (props) => {
  // Check device viewport for proper display
  let footer = (props.width < 600) ? <Footer /> : null

  return (
    <div className={styles.MainContainer}>
      <Header
        backBtn={props.backBtn}
        toggleDrawer={props.toggleDrawer}
        width={props.width} />
      {props.children}
      {footer}
    </div>
  )
}

export default layout
