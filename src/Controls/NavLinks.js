import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Build';
import HelpIcon from '@material-ui/icons/Help';
import AboutIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

const icons = (index) => {
	switch(index) {
		case 0:
			return (<HomeIcon />)
		case 1:
			return (<SettingsIcon />)
		case 2:
			return (<HelpIcon />)
		case 3:
			return(<AboutIcon />)
		default:
			return (<HelpIcon />)
	}
}

const ListItemLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />);

function NavLinks({width}) {
	const classes = useStyles();

	const menu = [
		{title: 'Главная', href: '/'},
		{title: 'Настройки', href: '/settings'},
		{title: 'Помощь', href: '/help'},
		{title: 'О нас', href: '/about'},
	]

	return (
		<div>
			{ isWidthUp('sm', width) &&
				<div className={classes.toolbar} />
			}
			<List className="app-nav">
				{menu.map((menuItem, index) => (
				<ListItem button component={ListItemLink} exact to={menuItem.href} key={menuItem.title}>
						<ListItemIcon>{icons(index)}</ListItemIcon>
						<ListItemText primary={menuItem.title} />
					</ListItem>
				))}
			</List>
		</div>
	)
}

export default withWidth()(NavLinks);