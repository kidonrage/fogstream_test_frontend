import React from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NewsList from './NewsList/NewsList.js';
import SearchForm from './SearchForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import './NewsScreen.css';

export default class NewsScreen extends React.Component {
	state = {
		page: 1,
		newsOnPage: 5,
		articles: [],
		query: '',
		isFetching: false
	}

	handleContainerOnBottom = () => {
		// Check the free subscription limit (100 posts)
		if (this.state.page * this.state.newsOnPage <= 100 ) {
			this.fetchNews(this.state.query, 'ru');
		}
  }


	fetchNews = (query, country) => {
		if (query == null || query === "") {
			return
		}
		this.setState({
			isFetching: true
		});
		fetch('https://newsapi.org/v2/everything?q='+ query +'&pageSize='+ this.state.newsOnPage +'&page='+ this.state.page +'&sortBy=publishedAt&apiKey=b3407958df3b49e1be282480305df7ad')
		.then((response) => {
			return response.json();
		})
		.then((newsJSON) => {
			var page = 1
			var articles = []
			console.log(this.state.query == query)
			if (this.state.query === query) {
				page = this.state.page + 1
				articles = [...this.state.articles, ...newsJSON.articles];
			} else {
				articles = [...newsJSON.articles];
			}
			this.setState({
				articles: articles,
				isFetching: false,
				page: page,
				query: query
			})
		});
	}

	render() {
		const fetching = this.state.isFetching;
		return (
			<Container maxWidth="xl" onScroll={this.handleScroll}>
				<SearchForm fetchNews={this.fetchNews} />
				<CssBaseline />
				{fetching &&
					<div className="fetching-indicator">
						<CircularProgress  />
					</div>
				}
				<NewsList news={this.state.articles} isFetching={this.state.isFetching} />
				<BottomScrollListener onBottom={this.handleContainerOnBottom} />
			</Container>
		)
	}

}