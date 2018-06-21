import React, {Component} from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

 class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
     
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            ctiveMarker: marker,
            showingInfoWindow: true
        });
     
        onMapClicked = (props) => {
            if (this.state.showingInfoWindow) {
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                })
            }
        };

    render() {
        console.log("SGT11");
        return (
            <Map           
                style={{
                    minWwidth: "300px",
                    minHeight: "200px",
                    width: "90%",
                }} 
                google={this.props.google} 
                onClick={this.onMapClicked} 
                zoom={14}
                initialCenter = {{ lat: -27.477984, lng: 153.008197 }}
                className="googlemap_position"
            >
   
          <Marker onClick={this.onMarkerClick}
                  name={'brisbane'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA7vevCIVYkAl0FSLI5OE5apfKIf-W3ho4'
})(MapContainer)  