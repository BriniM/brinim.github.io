import React from 'react';
import './scss/_app.scss';
import img from './face.png';

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faCodepen } from '@fortawesome/free-brands-svg-icons';

function Home() {
	return (
		<main className="main">
			<section className="content">
				<img src={img} id="face" alt="Maher Brini" />
				<h1>Maher Brini</h1>
				<h2>Business Intelligence Student</h2>
				<p>University of Carthage, Tunis&apos; Advanced Business Studies School</p>
				<p>Web Full Stack & Software developer, graphic designer, motorsports fan and hiker.</p>
				<p>New website in the works!</p>
				<footer style={{fontSize: '20px'}}>
					<a href="https://codepen.io/brinim"><FontAwesomeIcon icon={faCodepen} /></a>
					<a href="https://github.com/BriniM"><FontAwesomeIcon icon={faGithubSquare} /></a>
					<a href="mailto:maherbrini00@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
				</footer>
			</section>
		</main>
	);
}

export default Home;