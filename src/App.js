import React from 'react';
import './App.css';
import NavBar from './Controls/NavBar';
import Sidebar from './Controls/Sidebar';
import ContentView from './Controls/ContentView';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));


function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>

			<NavBar />
			<Sidebar />

			<ContentView />

		</div>
	)
}

export default App;
