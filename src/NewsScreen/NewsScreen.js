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
		newsOnPage: 15,
		articles: [],
		query: '',
		from: '',
		to: '',
		isFetching: false
	}

	handleContainerOnBottom = () => {
		// Check the free subscription limit (100 posts)
		if ((this.state.page + 1) * this.state.newsOnPage <= 100 ) {
			this.fetchNews(this.state.query, this.state.from, this.state.to);
		} else {
			let remainingArticles = 100 - this.state.articles.length;
			console.log("Больше грузить нельзя. Хотя надобно ещё: " + remainingArticles);
		}
  }

	fetchNews = (query, from, to) => {
		if (query == null || query === "") {
			return
		}
		let currentPage = this.checkPage(query, from, to)
		this.setState({
			page: currentPage,
			isFetching: true
		});
		let apiQuery = this.getApiQuery(query, from, to)
		console.log("API QUERY: " + apiQuery)
		fetch(apiQuery)
		.then((response) => {
			return response.json();
		})
		.then((newsJSON) => {
			var articles = []
			console.log(this.state.query == query)
			if (currentPage > 1) {
				articles = [...this.state.articles, ...newsJSON.articles];
			} else {
				articles = [...newsJSON.articles];
			}
			this.setState({
				articles,
				from,
				to,
				query,
				isFetching: false
			})
		});
	}

	checkPage = (queryText, from, to) => {
		if (this.state.query === queryText && this.state.from === from && this.state.to === to) {
			return this.state.page + 1
		} else {
			return 1
		}
	}

	getApiQuery = (queryText, from, to) => {
		let apiQuery = 'https://newsapi.org/v2/everything?q='+ queryText + '&';
		apiQuery += 'pageSize='+ this.state.newsOnPage +'&';
		apiQuery += 'page='+ this.state.page +'&';
		apiQuery += 'from='+from+'&to='+to+'&';
		apiQuery += 'sortBy=publishedAt&apiKey=b3407958df3b49e1be282480305df7ad';
		return apiQuery
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