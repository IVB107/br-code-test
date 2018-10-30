import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render() {

    const style = {
      width: '100%',
      height: '180px'
    }

    return (
      <Map
        google={this.props.google}
        style={style}
        zoom={15}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.lng
        }} >
        <Marker
          onClick={this.onMarkerClick}
          name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose} >
            <div>
            </div>
        </InfoWindow >
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyCEgBBZGtj_FjM60mKmhczAc-qrG1Ahtsc`
})(MapContainer)
