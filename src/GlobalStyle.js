import {createGlobalStyle} from 'styled-components';
import style from 'styled-theming';

const getBackground = style('mode', {
	// For the light theme using default material ui styles (they're commented) and custom styles for the dark
	// light: '#fefefe !important', 
	dark: '#121212 !important'
});
const getForeground = style('mode', {
	// light: '#111 !important',
	dark: 'rgba(197,197,197,1) !important'
});
const getHeader = style('mode', {
	light: 'rgba(0, 165, 224, 1) !important',
	dark: 'rgba(31,31,31,1) !important'
});
const getControlsSurface = style('mode', {
	// light: '#fff',
	dark: 'rgba(31,31,31,1) !important'
});
const getFormBG = style('mode', {
	// light: '#fff',
	dark: 'rgba(55,55,55,1) !important'
});
const getLines = style('mode', {
	// light: 'rgba(0, 0, 0, 0.12)',
	dark: 'rgba(255, 255, 255, 0.12) !important'
});
const getNavActive = style('mode', {
	dark: 'rgba(255,255,255,0.04)'
});


const GlobalStyle = createGlobalStyle`
body {
	background-color: ${getBackground};
	color: ${getForeground};
}
header,
.MuiAvatar-root {
	background-color: ${getHeader};
}
.app-nav .active {
	background: ${getNavActive};
}
.MuiDrawer-paper {
	background-color: ${getControlsSurface};
	color: ${getForeground};
}
.MuiDrawer-paper svg {
	fill: ${getForeground};
}
form > div {
	background-color: ${getFormBG};
}
form input {
	color: ${getForeground};
}
form label {
	color: ${getForeground};
	opacity: 0.75;
}
form button {
	color: ${getForeground};
}
.MuiCardContent-root {
	background-color: ${getControlsSurface};
}
.MuiCardContent-root,
.MuiCardContent-root p,
.MuiCardContent-root span{
	color: ${getForeground};
}
.MuiCardHeader-root,
.MuiCardHeader-root span,
.MuiCardActions-root,
.MuiCardActions-root button,
.MuiButton-root{
	background-color: ${getFormBG};
	color: ${getForeground};
}
.MuiButton-label {
	color: ${getForeground};
}
.fetching-indicator {
	background-color: ${getControlsSurface};
}
hr {
	background-color: ${getLines};
}
`;

export default GlobalStyle;