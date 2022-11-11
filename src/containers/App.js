import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import '../containers/App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Video from '../components/Video';
import Ciudad from '../components/Ciudad';

const apiKey = '760c1e5502795d1736ffb282e108bedf';
function App() {
	const [cities, setCities] = useState([]);

	function onSearch(ciudad) {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
		)
			.then((r) => r.json())
			.then((recurso) => {
				if (recurso.main !== undefined) {
					const ciudad = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: recurso.name,
						weather: recurso.weather[0].main,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
					};
					setCities((oldCities) => [...oldCities, ciudad]);
				} else {
					alert('City not found');
				}
			});
	}

	function onClose(id) {
		setCities((oldCities) => oldCities.filter((c) => c.id !== id));
	}

	return (
		<div className="App">
			<Route>
				<Video />
			</Route>
			<Route path="/">
				<Nav onSearch={onSearch} />
			</Route>
			<Route path="/about" component={About} />
			<Route
				exact
				path="/"
				render={() => <Cards cities={cities} onClose={onClose} />}
			/>
			<Route
				path="/ciudad/:ciudadId"
				render={(nombre) => (
					<Ciudad
						ciudad={
							cities.filter(
								(city) => city.id === parseInt(nombre.match.params.ciudadId)
							)[0]
						}
					/>
				)}
			/>
		</div>
	);
}

export default App;
