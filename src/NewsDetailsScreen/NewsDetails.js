import React from 'react';
import {connect} from 'react-redux';
import ArticleDetailedCard from './ArticleDetailedCard';


class NewsDetails extends React.Component {

	render() {
		const article = this.props.article ? (
			<ArticleDetailedCard article={this.props.article} />
		) : (
			<div>{'Упс! Что-то мы таких постов не наблюдаем...'}</div>
		)
		return(
			<div className="post-container">
				{ article }
			</div>
		)
	}
}

const mapStateToProps = (state, newsItemProps) => {
	let id = parseInt(newsItemProps.match.params.news_id);
	return {
		article: state.articles.find(article => article.id === id)
	}
}

export default connect(mapStateToProps)(NewsDetails)