import React from 'react';
import whitewrapperStyles from '../css/whitewrapper.module.css';
import genericStyles from '../css/generic.module.css';

function Whitewrapper(props) {
	const {flex, flexCenter, flexColumn} = genericStyles;
	const {main, content} = whitewrapperStyles;
	return (
		<main className={`${main} ${flex} ${flexCenter}`}>
			<section className={`${content} ${flex} ${flexColumn}`}>
				{props.children}
			</section>
		</main>
	);
}

export default Whitewrapper;