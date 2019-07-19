import {createGlobalStyle} from 'styled-components';
import style from 'styled-theming';

const getBackground = style('mode', {
	light: '#fefefe !important',
	dark: '#121212 !important'
});
const getForeground = style('mode', {
	light: '#111 !important',
	dark: 'rgba(197,197,197,1) !important'
});
const getHeader = style('mode', {
	light: 'rgba(0, 165, 224, 1) !important',
	dark: 'rgba(31,31,31,1) !important'
});
const getControlsSurface = style('mode', {
	light: '#fff !important',
	dark: 'rgba(31,31,31,1) !important'
});
const getFormBG = style('mode', {
	light: '#fff !important',
	dark: 'rgba(55,55,55,1) !important'
});

const GlobalStyle = createGlobalStyle`
body {
	background-color: ${getBackground};
	color: ${getForeground};
}
header {
	background-color: ${getHeader};
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
.fetching-indicator {
	background-color: ${getControlsSurface};
}
`;

export default GlobalStyle;