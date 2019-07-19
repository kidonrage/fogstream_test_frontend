import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavLinks from './NavLinks';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

function ControlPanel({width}) {
	const classes = useStyles();

	const [state, setState] = React.useState({
		left: false
	});
	
	const toggleDrawer = (side, open) => event => {
		setState({ ...state, [side]: open });
	};

	if (isWidthUp('sm', width)) {
		return (
			<div>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<Typography variant="h6" noWrap>
							Fogstream News
						</Typography>
					</Toolbar>
				</AppBar>
				<nav>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<NavLinks />
				</Drawer>
				</nav>
			</div>
		)
	} else {
		return(
			<div>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={toggleDrawer("left", true)}
							edge="start"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Fogstream News
						</Typography>
					</Toolbar>
				</AppBar>
				<SwipeableDrawer
					open={state.left}
					onClose={toggleDrawer("left", false)}
					onOpen={toggleDrawer("left", true)}
				>
					<NavLinks />
				</SwipeableDrawer>
			</div>
		)
	}
}

export default withWidth()(ControlPanel);