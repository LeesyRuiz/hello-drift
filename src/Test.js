
import React, { Component } from "react";

class LatLng extends Component {
  constructor(props) {
    super(props);
  }

  geocodeAddress: function (address) {
    this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

      if (status === google.maps.GeocoderStatus.OK) {

        this.setState({
          foundAddress: results[0].formatted_address,
          isGeocodingError: false
        });

        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      }

      this.setState({
        foundAddress: null,
        isGeocodingError: true
      });

      this.map.setCenter({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

      this.marker.setPosition({
        lat: ATLANTIC_OCEAN.latitude,
        lng: ATLANTIC_OCEAN.longitude
      });

    }.bind(this));
  },

  setMapElementReference: function (mapElementReference) {
    this.mapElement = mapElementReference;
  },

  componentMount(){

    const num = 3
    this.setState({
      events: res.events,
    })
  }

  render() {
    return (
      <div className="map" ref={this.setMapElementReference}></div>
    )}



  }
  export default LatLng;
