import React from 'react';
import './Ciudad.css';

class Ciudad extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<div className="ciudad">
				<div className="nuevo">
					<h3 className="title">{this.props.ciudad.name}</h3>
					<p>Temperature: {this.props.ciudad.temp}</p>
					<p>Max: {this.props.ciudad.max}</p>
					<p>Min: {this.props.ciudad.min}</p>
					<p>Wind: {this.props.ciudad.wind}</p>
					<p>Weather: {this.props.ciudad.weather}</p>
					<p>Clouds: {this.props.ciudad.clouds}</p>
					<p>Latitude: {this.props.ciudad.latitud}</p>
					<p>Longitude: {this.props.ciudad.longitud}</p>

					<img
						src={`http://openweathermap.org/img/wn/${this.props.ciudad.img}@2x.png`}
						alt=""
					/>
				</div>
			</div>
		);
	}
}

export default Ciudad;
