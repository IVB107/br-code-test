import React from 'react'
import Aux from '../../hoc/Aux'
import styles from './Layout.module.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import SideDrawer from '../../Components/SideDrawer/SideDrawer'

const layout = (props) => {
  return (props.width < 600) ? (
    <Aux >
      <div className={styles.MainContainer}>
        <Header width={props.width} />
        {props.children}
        <Footer />
      </div>
    </Aux >
  ) : (
    <Aux >
      <div className={styles.MainContainer}>
        <Header />
        {props.children}
      </div>
    </Aux >
  )
}

export default layout
