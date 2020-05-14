import React from 'react';
import { Hero } from './Hero';

import logoImgSrc from './Logo.png';
import gfxImgSrc from './GFX.png';

function App() {
	return (
		<div>
			{ /* FEATURE: Costumize menu for regular visitors and Club Members 
			*    Option A: Setup an API and make this a class component
				 Option B: Render the App by the server
				 TODO: https://www.npmjs.com/package/react-particles-js
			*/ }
			<Hero  
				header={ { logo: logoImgSrc, logoAlt: 'Logo du Club IHEC Big Data Science', 
					menu: [ { menuItem: 'Acceuil', link: '#' },
						{ menuItem: 'A propos de nous', link: '#' }, 
						{ menuItem: 'Gallery', link: '#' },
						{ menuItem: 'Contact', link: '#' },
						{ menuItem: 'News', link: '#' },]} }
				btn='Découvrez le Club!'
				heading={'Premier Club Scientifique a l\'IHEC Carthage.'}
				paragraph={'IHEC BigData Science est un club scientifique dont l’activité principale est de développer ' +
				'la capacité professionnelle des étudiants en leurs permettant d’apprendre et de créer des réseaux dans ' +
				'le domaine du Big Data et la science des données.' }
				img={gfxImgSrc}
				imgAlt="IT Infrastructure graphics"
			/>
		</div>
	);
}

export default App;
