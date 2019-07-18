import React from 'react';

export default class NewsDetails extends React.Component {
	componentDidMount() {
		console.log(this.props);
		let id = this.props.match.params.news_id;
	}

	render() {
		return(
			<div>Post!</div>
		)
	}
}