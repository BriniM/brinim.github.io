import React from 'react';
import './Hero.scss';

interface MenuItem {
	menuItem: string,
	link: string
}

interface Header {
	logo: any,
	logoAlt: string,
	menu: Array<MenuItem>
}

interface HeroProps {
	header: Header,
	heading: string,
	paragraph: string,
	btn: string,
	img: any,
	imgAlt: string
}

export function Navigation({ logo, menu, logoAlt }: Header) {
	return (
		<header>
			<nav>
				<img src={logo} alt={logoAlt} />
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
				<ul>
					{
						menu.map(elem => <li key={elem.menuItem}><a href={elem.link}>{elem.menuItem}</a></li>)
					}
				</ul>
			</nav>
		</header>);
}

export function Hero({ header, heading, paragraph, btn, img, imgAlt }: HeroProps) {
	return (
		<div className="Hero">
			<Navigation logo={header.logo}
				logoAlt={header.logoAlt}
				menu={header.menu}
			/>
			<main>
				<div>
					<h1>{heading}</h1>
					<p>{paragraph}</p>
					<button>{btn}</button>
				</div>
				<img src={img} alt={imgAlt} className="responsiveImg" />
			</main>
		</div>);
}