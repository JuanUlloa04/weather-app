import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
	return (
		<div className="contenedor">
			<div>
				<span className="by">Weather app by Juan Ulloa</span>
			</div>
			<SearchBar onSearch={onSearch} />
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span className="home">Home</span>
			</Link>
			<Link to="/about" style={{ textDecoration: 'none' }}>
				<span className="about">About</span>
			</Link>
		</div>
	);
}

export default Nav;
