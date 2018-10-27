import React from 'react'
import Aux from '../../hoc/Aux'
import styles from './Header.module.css'

const header = (props) => (
  <Aux >
    <div className={styles.headerContainer}>
      <div className={styles.wrapper}>
        <div className={styles.backBtn}></div>
        <div className={styles.appName}>Lunch Tyme</div>
        <div className={styles.mapIcon}></div>
      </div>
    </div>
  </Aux >
)

export default header
