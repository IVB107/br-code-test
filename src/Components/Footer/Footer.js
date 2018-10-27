import React from 'react'
import Lunch from '../Buttons/Lunch/Lunch'
import Internets from '../Buttons/Internets/Internets'
import styles from './Footer.module.css'

const footer = (props) => (
  <div className={styles.footerContainer}>
    <Lunch />
    <Internets />
  </div>
)

export default footer
