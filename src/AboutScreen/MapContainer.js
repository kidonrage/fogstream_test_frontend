import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Grid from '@material-ui/core/Grid';
 
const mapStyles = {
	marginTop: '20px',
  width: '100%',
  height: '300px'
};

export class MapContainer extends React.Component {
	state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

	onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
	render() {
    return (
			<Grid item xs={12} >
				<Map
					google={this.props.google}
					zoom={14}
					style={mapStyles}
					initialCenter={{ lat: -1.2884, lng: 36.8233 }}
				>
					<Marker
						onClick={this.onMarkerClick}
						name={'Kenyatta International Convention Centre'}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					>
						<div>
							<h4>{this.state.selectedPlace.name}</h4>
						</div>
					</InfoWindow>
				</Map>
			</Grid>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAFk81vfhKyKkZpzs-dRP03ufk3NxbWD7k')
})(MapContainer)
