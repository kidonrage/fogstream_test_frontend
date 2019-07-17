import React from 'react';
import Sidebar from './Sidebar';
import ContentView from './ContentView';
import { BrowserRouter } from 'react-router-dom';

export default function MainScreen() {
	return (
		<BrowserRouter>
			<Sidebar />
			<ContentView />
		</BrowserRouter>
	)
}