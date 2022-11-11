import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card({ min, max, name, img, onClose, id }) {
	return (
		<div className="card">
			<div id="closeIcon" className="row">
				<button onClick={onClose} className="btn btn-sm btn-danger">
					X
				</button>
			</div>

			<div className="card-body">
				<Link to={`/ciudad/${id}`} style={{ textDecoration: 'none' }}>
					<h4 className="name">{name}</h4>
				</Link>
				<div className="row">
					<div>
						<h6>Min</h6>
						<p>{min}°</p>
					</div>
					<div>
						<h6>Max</h6>
						<p>{max}°</p>
					</div>
					<div>
						<img
							className="iconoClima"
							src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
							width="80"
							height="80"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
