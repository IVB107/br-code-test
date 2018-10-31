import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
    }
  }
  // Display location name
  onMarkerClick = (props, marker, e) => {
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  render() {
    const containerSize = {
      width: '100%',
      height: '180px'
    }
    // Show map & location marker
    return (
      <Map
        google={this.props.google}
        style={containerSize}
        zoom={15}
        center={{
          lat: this.props.lat,
          lng: this.props.lng
        }} >
        <Marker
          onClick={this.onMarkerClick}
          title={this.props.name}
          position={{lat: this.props.lat, lng: this.props.lng}} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <h3>{`${this.props.current.name}`}</h3>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `AIzaSyCEgBBZGtj_FjM60mKmhczAc-qrG1Ahtsc`
})(MapContainer)
