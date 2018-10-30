import React, { Component } from 'react'
import Restaurant from '../../Components/Restaurant/Restaurant'

class Feed extends Component {
  render() {
    return this.props.feed.map((restaurant, index) => {
      return <Restaurant
        key={index}
        name={restaurant.name}
        category={restaurant.category}
        image={restaurant.backgroundImageURL}
        address={restaurant.location.address}
        latitude={restaurant.location.lat}
        longitude={restaurant.location.lng}
        clicked={() => this.props.clicked(index)}
        // phone={restaurant.contact.formattedPhone}
        // twitter={restaurant.contact.twitter}
      />
    })
  }
}

export default Feed
