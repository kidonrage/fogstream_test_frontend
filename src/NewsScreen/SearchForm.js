import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './SearchForm.css'

export default class SearchForm extends React.Component {
	state = {
		query: ''
	}

	handleChange = (e) => {
		this.setState({
			query: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.fetchNews(this.state.query, 'us');
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
								className="search-form-input"
							/>
							<IconButton aria-label="Search" type="submit">
								<SearchIcon />
							</IconButton>
						</Paper>
						<Paper className="search-form-date">
							<TextField
								id="date"
								label="From"
								type="date"
								defaultValue="2017-05-24"
								// className={classes.textField}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								id="date"
								label="To"
								type="date"
								defaultValue="2017-05-24"
								// className={classes.textField}
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