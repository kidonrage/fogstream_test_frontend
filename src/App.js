import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NewsList from './NewsList.js';
import SearchForm from './SearchForm';

class App extends React.Component {
	state = {
		articles: [],
		country: 'us',
		query: ''
	}

	fetchNews = (query, country) => {
		console.log('fetching news!')
		fetch('https://newsapi.org/v2/top-headlines?country='+ country +'&category='+ query +'&from=2019-07-16&sortBy=publishedAt&apiKey=b3407958df3b49e1be282480305df7ad')
		.then((response) => {
			return response.json();
		})
		.then((myJson) => {
			console.log(myJson);
			this.setState({
				articles: myJson.articles
			})
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.fetchNews(this.state.query, this.state.country)
	}

	handleChange = (e) => {
		this.setState({
			query: e.target.value
		})
	}

	render() {
		// console.log(this.state);
		return (
			<div className="main-app-lol">
				<Container maxWidth="xl">
					<SearchForm fetchNews={this.fetchNews} />
					<CssBaseline />
					<NewsList news={this.state.articles} />
				</Container>
			</div>
		)
	}
}

export default App;
