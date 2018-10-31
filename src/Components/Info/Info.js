import React from 'react'
import MapContainer from '../../hoc/MapContainer'
import styles from './Info.module.css'

const info = (props) => (
  <div className={styles.infoContainer}>
    <div className={styles.wrapper}>
      <div id="map" className={styles.mapContainer}>
        <MapContainer
          current={props.current}
          loc={props.current.location}
          lat={props.current.location.lat}
          lng={props.current.location.lng}/>
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{props.current.name}</p>
        <p className={styles.category}>{props.current.category}</p>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.addressContainer}>
          <p>{props.current.location.address}</p>
          <p>{props.current.location.formattedAddress[1]}</p>
        </div>
        <p className={styles.phone}>{props.phone}</p>
        <p className={styles.twitter}>{props.twitter}</p>
      </div>
    </div>
  </div>
)

export default info
