import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
        defaultZoom = { 15 }
      >
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `40rem`, width: '70rem'}} /> }
          mapElement={ <div style={{ display:"inline-block", height: `100%`,width:'100%',borderRadius:"0.5rem"   }} /> }
        />
      </div>
   );
   }
};
export default Map;