import React from 'react';
import MapContainer from './MapContainer';
import Typography from '@material-ui/core/Typography';
import './About.css';

export default class Help extends React.Component {
	// Как я понял, текстовая информация и координаты карты для этого раздела будут забираться с сервера (и, допустим, редактироваться из админки), поэтому я решил сделать компонент классом и хранить эту информацию в стейте
	state = {
		placeToShow: {
			name: 'Хабаровск',
			lat: 48.48272,
			lng: 135.08379
		},
		aboutText: "Integer pellentesque lorem lacus, ac varius risus rhoncus vitae. Cras venenatis id lorem ut feugiat. Aliquam malesuada faucibus cursus. Proin ultricies mi non arcu viverra, nec porttitor erat efficitur. Nulla orci ligula, aliquam vel gravida viverra, semper a ex. Fusce laoreet nulla id elit pellentesque interdum. Aliquam blandit congue laoreet. Suspendisse ac egestas purus, suscipit venenatis risus. Aenean nec sapien sed augue finibus congue sed eget urna. In efficitur volutpat eros. Morbi non lacinia mi, quis ultricies eros. Integer eu elit quis enim tincidunt vestibulum in at felis. Fusce euismod imperdiet nisl nec vehicula. Praesent ut porttitor nisl."
	}
	
	render() {
		return (
			<div className="about-container">
				<Typography component="p">{this.state.aboutText}</Typography>
				<MapContainer placeToShow={this.state.placeToShow}/>
			</div>
		)
	}
}