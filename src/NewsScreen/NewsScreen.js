import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NewsList from './NewsList.js';
import SearchForm from './SearchForm';
import './NewsScreen.css'

export default class NewsScreen extends React.Component {
	state = {
		articles: [],
		query: '',
		isFetching: false
	}

	fetchNews = (query, country) => {
		this.setState({
			isFetching: true
		});
		fetch('https://newsapi.org/v2/everything?q='+ query +'&from=2019-07-16&sortBy=publishedAt&apiKey=b3407958df3b49e1be282480305df7ad')
		.then((response) => {
			return response.json();
		})
		.then((newsJSON) => {
			console.log(newsJSON);
			this.setState({
				articles: newsJSON.articles,
				isFetching: false
			})
		});
	}

	render() {
		const fetching = this.state.isFetching;
		return (
			<Container maxWidth="xl">
				<SearchForm fetchNews={this.fetchNews} />
				<CssBaseline />
				{fetching &&
					<div className="fetching-indicator">
						<div className="lds-ring"><div></div><div></div><div></div><div></div></div>
					</div>
				}
				<NewsList news={this.state.articles} isFetching={this.state.isFetching} />
			</Container>
		)
	}

}