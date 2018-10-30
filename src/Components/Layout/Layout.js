import React from 'react'
import Aux from '../../hoc/Aux'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const layout = (props) => {

  // Check device width to display correct view
  let footer = (props.width < 600) ? <Footer /> : null

  return (
    <Aux >
      <div className={styles.MainContainer}>
        <Header
          toggleDrawer={props.toggleDrawer}
          width={props.width} />
          {props.children}
        {footer}
      </div>
    </Aux >
  )
}

export default layout
