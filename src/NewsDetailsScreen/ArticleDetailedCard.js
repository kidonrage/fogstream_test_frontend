import React from 'react';
import './ArticleDetailedCard.css';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import noImage from '../no-image.png';
import ArticleHelper from '../Helpers/ArticleHelper';

export default function ArticleDetailedCard(props) {
	const articleHelper = new ArticleHelper()

	const article = props.article

  return (
    <Card className={'article-detailed'}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe">
            {article.author ? article.author.charAt(0) : "?" }
          </Avatar>
        }
        title={article.author ? article.author : 'Неизвестный автор'}
        subheader={'Опубликовано: ' + articleHelper.getReadableDate(article.publishedAt)}
      />
      <CardMedia
				component="img"
				alt={article.title}
        className={'article-detailed-img'}
        image={articleHelper.getImg(article.urlToImage)}
				// 404 img src handling
				onError={(e)=>{e.target.src=noImage}}
      />
      <CardContent>
				<Typography variant="h4" component="h3" className="article-detailed-title">
					{article.title}
				</Typography>
				<Typography paragraph>
					{article.content}
				</Typography>
      </CardContent>
      <CardActions>
				<Button size="small" component="a" href={article.url} target="_blank">Посетить страницу источника</Button>
      </CardActions>
    </Card>
  );
}