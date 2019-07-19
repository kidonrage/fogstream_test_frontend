import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './SearchForm.css'

class SearchForm extends React.Component {
	state = {
		query: '',
		from: '',
		to: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.addArticles([{name: "kuradura"}]);
		this.props.fetchNews(this.state.query, this.state.from, this.state.to);
	}

	render() {
		return (
			<Grid container justify="center">
				<Grid item xs={12} sm={6} md={4} >
					<form onSubmit={this.handleSubmit} className="search-form">
						<Paper className="search-form-query">
							<InputBase
								placeholder="Type something..."
								inputProps={{ 'aria-label': 'Напечатайте что-нибудь...' }}
								onChange={this.handleChange}
								name="query"
								className="search-form-input"
							/>
							<IconButton aria-label="Search" type="submit">
								<SearchIcon />
							</IconButton>
						</Paper>
						<Paper className="search-form-date">
							<TextField
								name="from"
								label="From"
								type="date"
								onChange={this.handleChange}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								name="to"
								label="To"
								type="date"
								onChange={this.handleChange}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Paper>
					</form>
				</Grid>
			</Grid>
		);
	}
}

const mapStatesToProps = (state) => {
	return {
		query: state.query
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addArticles: (articles) => { dispatch({type: "ADD_ARTICLES", articles: articles}) }
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(SearchForm);