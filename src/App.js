import React from 'react';
import './App.css';
import NavBar from './Controls/NavBar';
import Sidebar from './Controls/Sidebar';
import ContentView from './Controls/ContentView';

function App() {

	return (
		<div className="root">

			<NavBar />
			<Sidebar />

			<ContentView />

		</div>
	)
}

export default App;
