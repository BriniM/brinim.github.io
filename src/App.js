import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const Users = lazy(() => import('./routes/Users'));
const Login = lazy(() => import('./routes/Login'));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/fb/recentactivity/' component={Users} />
					<Route exact path='/fb/recentactivity/login/' component={Login} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
