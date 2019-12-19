import React from 'react';
import './scss/_app.scss';
import img from './face.png';

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faCodepen } from "@fortawesome/free-brands-svg-icons";

function App() {
	return (
		<main className="main">
			<section className="content">
				<img src={img} id="face" alt="Maher Brini" />
				<h1>Maher Brini</h1>
				<h2>Business Intelligence Student</h2>
				<p>University of Carthage, Tunis' Advanced Business Studies School</p>
				<p>Web Full Stack & Software developer, graphic designer, motorsports fan and hiker.</p>
				<p>New website in the works!</p>
				{/* Icons here */}
				<FontAwesomeIcon icon={faCodepen} />
				<FontAwesomeIcon icon={faGithubSquare} />
				<FontAwesomeIcon icon={faEnvelope} />
			</section>
		</main>
	);
}

export default App;
