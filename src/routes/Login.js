import React from 'react';
import Whitewrapper from './components/Whitewrapper';

import { flex, flexColumn } from './css/generic.module.css';
import { loginForm } from './css/login.module.css';

export default function Login() {
	return (
		<Whitewrapper>
			<h1>This is the login page</h1>
			<form
				method="POST"
				action="/fb/recentactivity/login"
				className={`${loginForm} ${flex} ${flexColumn}`}>
				<label htmlFor="username">Username: </label>
				<input type="text" name="username" />
				<label htmlFor="password">Password: </label>
				<input type="password" name="password" />
				<button type="submit">Send</button>
			</form>
		</Whitewrapper>
	);
}