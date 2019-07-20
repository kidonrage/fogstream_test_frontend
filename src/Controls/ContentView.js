import React from 'react';
import NewsScreen from '../NewsScreen/NewsScreen';
import NewsDetails from '../NewsDetailsScreen/NewsDetails';
import Container from '@material-ui/core/Container';
import SettingsScreen from '../SettingsScreen/Settings';
import About from '../AboutScreen/About';
import Help from '../HelpScreen/Help';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
		padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
}));

export default function ContentView() {
	const classes = useStyles();

	return (
		<main className={classes.content}>
			<Container maxWidth="xl">
				<div className={classes.toolbar} />
				<Switch>
					<Route exact path="/" component={NewsScreen} />
					<Route path="/settings" component={SettingsScreen} />
					<Route path="/about" component={About} />
					<Route path="/help" component={Help} />
					<Route path="/:news_id" component={NewsDetails} />
				</Switch>
			</Container>
		</main>
	)
}