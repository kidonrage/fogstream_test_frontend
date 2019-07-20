import React from 'react';
import {connect} from 'react-redux';
import BottomScrollListener from 'react-bottom-scroll-listener'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NewsList from './NewsList/NewsList.js';
import SearchForm from './SearchForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import FetchWorker from './FetchWorker';
import './NewsScreen.css';

class NewsScreen extends React.Component {

	fetchWorker = new FetchWorker();

	handleContainerOnBottom = () => {
		// Check the free subscription limit (100 postss)
		if (this.props.page * this.props.newsOnPage <= 100 ) {
			this.fetchWorker.fetchNews(this.props.query, this.props.newsOnPage, this.props.from, this.props.to, this.props.page)
			.then((nextArticlesJSON) => {
				this.props.loadMore(nextArticlesJSON.articles);
			})
		} else {
			let remainingArticles = 100 - this.props.articles.length;
			console.log("Больше грузить нельзя. Хотя надобно ещё: " + remainingArticles);
		}
	}
	
	render() {
		console.log(this.props);

		const fetching = this.props.isFetching;
		const articles = this.props.articles
		
		return (
			<Container maxWidth="xl" onScroll={this.handleScroll}>
				<SearchForm fetchNews={this.fetchNews} />
				<CssBaseline />
				{fetching &&
					<div className="fetching-indicator">
						<CircularProgress  />
					</div>
				}
				<NewsList news={articles} />
				<BottomScrollListener onBottom={this.handleContainerOnBottom} />
			</Container>
		)
	}
}

const mapStatesToProps = (state) => {
	return {
		articles: state.articles,
		query: state.query,
		pageSize: state.pageSize,
		page: state.page,
		from: state.from,
		to: state.to,
		newsOnPage: state.newsOnPage
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadMore: (articles) => { dispatch({type: "ADD_ARTICLES", articles: articles}) }
	}
}

export default connect(mapStatesToProps, mapDispatchToProps)(NewsScreen);