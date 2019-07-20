import React from 'react';
import './App.css';
import ControlPanel from './Controls/ControlPanel';
import ContentView from './Controls/ContentView';
import { BrowserRouter } from 'react-router-dom';
import useTheme from './useTheme';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './GlobalStyle';

function App() {

	const theme = useTheme()

	return (
		<ThemeProvider theme={theme}>
			<div className = "root">
				<GlobalStyle />
				<BrowserRouter>
					<ControlPanel />
					<ContentView />
				</BrowserRouter>
			</div>
		</ThemeProvider>
	)
	
}

export default App;
