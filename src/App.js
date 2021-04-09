import React from 'react';
import './App.css';
import Header from '../src/Header/Header';
import Intro from '../src/Intro/Intro';
import Portfolio from '../src/Portfolio/Portfolio';

function App() {
  	return (
    	<div className="app">
			<div className="header">
				<Header />
			</div>
			<Intro />
			<Portfolio />
    	</div>
  	);
}

export default App;
