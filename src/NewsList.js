import React from 'react';
import Grid from '@material-ui/core/Grid';
import NewsListItem from './NewsListItem'

export default function NewsList({news}) {
	const newsItems = news.map( (newsItem, index) => {
		return (
			<Grid item xs={12} sm={6} md={4} key={index} >
				<NewsListItem newsItem={newsItem}/>
			</Grid>
		)
	})

  return (
		<div className="news-list">
			<Grid container justify="center" spacing={3}>
				{ newsItems }
			</Grid>
		</div>
  );
}