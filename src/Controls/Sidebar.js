import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Build';
import HelpIcon from '@material-ui/icons/Help';
import AboutIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const icons = (index) => {
	switch(index) {
		case 0:
			return (<HomeIcon />)
			break
		case 1:
			return (<SettingsIcon />)
			break
		case 2:
			return (<HelpIcon />)
			break
		case 3:
			return(<AboutIcon />)
		default:
			return (<HelpIcon />)
			break
	}
}

function ListItemLink(props) {
  return <ListItem button component={NavLink} {...props}  />;
}

export default function Sidebar() {
	const classes = useStyles();

	const menu = [
		{title: 'Главная', href: '/'},
		{title: 'Настройки', href: '/settings'},
		{title: 'Помощь', href: '/help'},
		{title: 'О нас', href: '/about'},
	]

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.toolbar} />
			<List className="app-nav">
				{menu.map((menuItem, index) => (
					<ListItemLink exact to={menuItem.href} key={menuItem.title}>
						<ListItemIcon>{icons(index)}</ListItemIcon>
						<ListItemText primary={menuItem.title} />
					</ListItemLink>
				))}
			</List>
		</Drawer>
	)
}