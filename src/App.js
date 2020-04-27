import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Home}/>
		</Switch>
	);
}

export default App;
