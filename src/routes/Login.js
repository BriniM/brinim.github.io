import React from 'react';
import Whitewrapper from './components/Whitewrapper';

export default function Login() {
	return (
		<Whitewrapper>
			<form method="POST" action="/fb/recentactivity/login">
				<label htmlFor="username">Username: </label>
				<input type="text" name="username" />
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" />
				<button type="submit">Send</button>
			</form>
		</Whitewrapper>
	);
}