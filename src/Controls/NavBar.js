import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: theme.mixins.toolbar,
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar>
				<Typography variant="h6" noWrap>
					Fogstream News
				</Typography>
			</Toolbar>
		</AppBar>
	)
}