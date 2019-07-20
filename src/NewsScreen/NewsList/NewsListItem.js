import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import noImage from '../../no-image.png';
import ArticleHelper from '../../Helpers/ArticleHelper.js'
import './NewsListItem.css';

export default function NewsListItem({newsItem}, key) {

	const ListItemLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

	const articleHelper = new ArticleHelper()

	return(
		<Card className="news-card">
				<CardMedia
					component="img"
					alt={newsItem.title}
					height="140"
					image={articleHelper.getImg(newsItem.urlToImage)}
					title={newsItem.title}
					// 404 img src handling
					onError={(e)=>{e.target.src=noImage}}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
					{newsItem.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{newsItem.description}
					</Typography>
					<Typography className="news-card-date" color="textSecondary" component="span">
          	Опубликовано: { articleHelper.getReadableDate(newsItem.publishedAt) }
       		</Typography>
				</CardContent>
			<CardActions>
				<Button fullWidth component={ListItemLink} to={"/" + newsItem.id} color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	)
}