import React from 'react';
import './Video.css';
import spaceVideo from '../img/Pexels.mp4';

function Video() {
	return (
		<div className="contain">
			<video autoPlay loop muted className="video">
				<source src={spaceVideo} type="video/mp4" />
			</video>
		</div>
	);
}

export default Video;
