import React,{Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper,google} from 'google-maps-react';
import './Map.css';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} initialCenter={{
        lat:12.971780,
        lng:79.158904}} zoom={16} style={{width: '95%', height: '95%',borderRadius:"0.8rem",display:"block",margin:"1rem auto",}}  >
 
        <Marker onClick={this.onMarkerClick}
        position={{lat: 12.971780,lng:79.158904}}
        title={'Vellore Institute of Technology'}
        name={'VIT'}
        
          />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
          
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey:("AIzaSyDwtvWR6J3WI3vzuI6mr0vnM7mZNFIikmQ")
})(MapContainer)