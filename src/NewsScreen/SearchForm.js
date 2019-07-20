import React from 'react';
import {connect} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FetchWorker from '../Helpers/FetchWorker';
import './SearchForm.css'

class SearchForm extends React.Component {
	state = {
		query: '',
		from: '',
		to: ''
	}

	fetchWorker = new FetchWorker();

	fetchNewArticles = () => {
		this.props.setFetching(true)
		let queryInfo = {
			queryString: this.state.query,
			fromString: this.state.from,
			toString: this.state.to
		}
		this.fetchWorker.fetchNews(queryInfo.queryString, this.props.newsOnPage, queryInfo.fromString, queryInfo.toString)
		.then((newsJSON) => {
			console.log("JSON PARSED");
			console.log(newsJSON);
			var newArticles = []
			newArticles = [...newsJSON.articles];
			this.props.saveArticles(newArticles, queryInfo);
			console.log("ARTICLES: " + newArticles);
			this.props.setFetching(false)
		});
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	componentDidMount() {
		// Обновляем input'ы, чтобы ввод не терялся после, например, посещения настроек
		this.setState({
			query: this.props.query,
			from: this.props.from,
			to: this.props.to
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		let queryText = this.state.query;
		if (queryText == null || queryText === "") {
			return
		}
		this.fetchNewArticles();
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
								value={this.state.query}
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
								value={this.state.from}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<TextField
								name="to"
								label="To"
								type="date"
								onChange={this.handleChange}
								value={this.state.to}
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
		query: state.query,
		from: state.from,
		to: state.to,
		newsOnPage: state.newsOnPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveArticles: (articles, queryInfo) => { dispatch({type: "REPLACE_ARTICLES", articles: articles, queryInfo: queryInfo }) }
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(SearchForm);