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
    showingInfoWindow: false,
    activeMarker: {},
  };

	onMarkerClick = (props, marker, e) =>
    this.setState({
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
					initialCenter={{ lat: this.props.placeToShow.lat, lng: this.props.placeToShow.lng }}
				>
					<Marker
						onClick={this.onMarkerClick}
						name={this.props.placeToShow.name}
					/>
					<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
					>
						<div>
							<h4>{this.props.placeToShow.name}</h4>
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
