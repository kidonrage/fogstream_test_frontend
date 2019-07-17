import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function NewsListItem({newsItem}, key) {

	return(
		<Card key={key}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={newsItem.title}
					height="140"
					image={newsItem.urlToImage}
					title={newsItem.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
					{newsItem.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{newsItem.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			{/* <CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions> */}
		</Card>
	)
}