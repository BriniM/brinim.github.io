import React from 'react';
import img from './face.png';

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';

import Whitewrapper from './components/Whitewrapper';

import {centerH, flex, flexWrap, flexMainSpaceBetween} from './css/generic.module.css';
import {face} from './css/home.module.css';
import {footer} from './css/footer.module.css';

function Home() {
	return (
		<Whitewrapper>
			<img className={`${centerH} ${face}`} src={img} alt="Maher Brini" />
			<h1>Maher Brini</h1>
			<h2>Business Intelligence Student</h2>
			<p>University of Carthage, Tunis&apos; Advanced Business Studies School</p>
			<p>Web Full Stack & Software developer, graphic designer, motorsports fan and hiker.</p>
			<p>New website in the works!</p>
			<footer className={`${footer} ${flex} ${flexWrap} ${flexMainSpaceBetween}`} style={{ fontSize: '20px' }}>
				<a href="https://codepen.io/brinim"><FontAwesomeIcon icon={faCodepen} /></a>
				<a href="https://github.com/BriniM"><FontAwesomeIcon icon={faGithubSquare} /></a>
				<a href="mailto:maherbrini00@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
			</footer>
		</Whitewrapper>
	);
}

export default Home;