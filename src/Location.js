// import React, { Component } from "react";
//
//
//
//
// var INITIAL_LOCATION = {
//   address: 'London, United Kingdom',
//   position: {
//     latitude: 51.5085300,
//     longitude: -0.1257400
//   }
// };
//
// var INITIAL_MAP_ZOOM_LEVEL = 8;
//
// var ATLANTIC_OCEAN = {
//   latitude: 29.532804,
//   longitude: -55.491477
// };
//
// var LatLng = React.createClass({
//   getInitialState: function () {
//     return {
//       isGeocodingError: false,
//       foundAddress: INITIAL_LOCATION.address
//     };
//   },
//
//   geocodeAddress: function (address) {
//     this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {
//
//       if (status === google.maps.GeocoderStatus.OK) {
//
//         this.setState({
//           foundAddress: results[0].formatted_address,
//           isGeocodingError: false
//         });
//
//         this.map.setCenter(results[0].geometry.location);
//         this.marker.setPosition(results[0].geometry.location);
//
//         return;
//       }
//
//       this.setState({
//         foundAddress: null,
//         isGeocodingError: true
//       });
//
//       this.map.setCenter({
//         lat: ATLANTIC_OCEAN.latitude,
//         lng: ATLANTIC_OCEAN.longitude
//       });
//
//       this.marker.setPosition({
//         lat: ATLANTIC_OCEAN.latitude,
//         lng: ATLANTIC_OCEAN.longitude
//       });
//
//     }.bind(this));
//   },
//
//   handleFormSubmit: function (submitEvent) {
//     submitEvent.preventDefault();
//
//     var address = this.searchInputElement.value;
//
//     this.geocodeAddress(address);
//   },
//
//   componentDidMount: function () {
//     var mapElement = this.mapElement;
//
//     this.map = new google.maps.Map(mapElement, {
//       zoom: INITIAL_MAP_ZOOM_LEVEL,
//       center: {
//         lat: INITIAL_LOCATION.position.latitude,
//         lng: INITIAL_LOCATION.position.longitude
//       }
//     });
//
//     this.marker = new google.maps.Marker({
//       map: this.map,
//       position: {
//         lat: INITIAL_LOCATION.position.latitude,
//         lng: INITIAL_LOCATION.position.longitude
//       }
//     });
//
//     this.geocoder = new google.maps.Geocoder();
//   },
//
//   setSearchInputElementReference: function (inputReference) {
//     this.searchInputElement = inputReference;
//   },
//
//   setMapElementReference: function (mapElementReference) {
//     this.mapElement = mapElementReference;
//   },
//
//   render: function () {
//     return (
//       <div className="container">
//
//         <div className="row">
//           <div className="col-sm-12">
//
//             <form className="form-inline" onSubmit={this.handleFormSubmit}>
//               <div className="row">
//                 <div className="col-xs-8 col-sm-10">
//
//                   <div className="form-group">
//                     <label className="sr-only" htmlFor="address">Address</label>
//                     <input type="text" className="form-control input-lg" id="address" placeholder="London, United Kingdom" ref={this.setSearchInputElementReference} required />
//                   </div>
//
//                 </div>
//                 <div className="col-xs-4 col-sm-2">
//
//                   <button type="submit" className="btn btn-default btn-lg">
//                     <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
//                   </button>
//
//                 </div>
//               </div>
//             </form>
//
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-sm-12">
//
//             {this.state.isGeocodingError ? <p className="bg-danger">Address not found.</p> : <p className="bg-info">{this.state.foundAddress}</p>}
//
//             <div className="map" ref={this.setMapElementReference}></div>
//
//           </div>
//         </div>
//       </div>
//     );
//   }
// });
//
// module.exports = LatLng;
//
//
//
//
// //
// //  class LatLng extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       geocoder: "",
// //       map: ""
// //     }
// //   }
// //
// //  codeAddress() {
// //     // var address = document.getElementById('address').value;
// //     var address = "Seattle"
// //     geocoder.geocode( { 'address': address}, function(results, status) {
// //
// //       if (status == 'OK') {
// //         console.log(results[0].geometry.location);
// //
// //       } else {
// //         alert('Geocode was not successful for the following reason: ' + status);
// //       }
// //     });
// //   }
// //
// //   componentWillMount(){
// //     codeAddress();
// //   }
// //   // <body onload="initialize()">
// //   // <div id="map" style="width: 320px; height: 480px;"></div>
// //   // <div>
// //   // <input id="address" type="textbox" value="Sydney, NSW">
// //   // <input type="button" value="Encode" onclick="codeAddress()">
// //   // </div>
// //   // </body>
// //   render() {
// //     return (
// //       <div> Your jbhsvgxcfdc </div>
// //     )}
// // }
// //
// // export default LatLng;
