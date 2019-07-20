import React from 'react';

export default class Help extends React.Component {
	// Как я понял, текстовая информация и координаты карты для этого раздела будут забираться с сервера (и, допустим, редактироваться из админки), поэтому я решил сделать компонент классом и хранить эту информацию в стейте
	state = {
		mapCoordinates: "dsa",
		aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra pretium ligula, aliquam porttitor purus porttitor at. Sed tincidunt diam ut lacus placerat molestie. Curabitur cursus nisl id ante pulvinar efficitur. Vestibulum semper orci nec mauris interdum blandit. Duis rutrum, quam eget ultricies lacinia, lacus sem rutrum turpis, aliquam semper est ligula vitae nunc. Nulla facilisi. Nulla facilisi. Quisque imperdiet justo justo, id feugiat ipsum commodo nec."
	}
	
	render() {
		return (
			<div>{this.state.aboutText}</div>
		)
	}
}