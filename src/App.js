import React from 'react';
import './App.css';
import ControlPanel from './Controls/ControlPanel';
import ContentView from './Controls/ContentView';
import { BrowserRouter } from 'react-router-dom';

function App() {

	return (
		<div className = "root">
			<BrowserRouter>
				<ControlPanel />
				<ContentView />
			</BrowserRouter>
		</div>
	)
}

export default App;
