import React, { useState, useEffect } from 'react';
import './scss/main.scss';

import Header from './components/Header';
import LocationSelectors from './components/location-selectors';
import Statistics from './components/statistics';
import Graph from './components/graph';

import { fetchCountryData, fetchProvinceData, fetchDistrictList, fetchDistrictData, fetchMunicipalList, fetchMunicipalData } from './api';

function App() {
	const [infected, setInfected] = useState(0);
	const [active, setActive] = useState(0);
	const [recoveries, setRecoveries] = useState(0);
	const [deaths, setDeaths] = useState(0);
	const [lastUpdated, setLastUpdated] = useState(Date.now());

	const [provinceIsSelected, setProvinceIsSelected] = useState(false);
	const [province, setProvince] = useState('');

	const [districtIsSelected, setDistrictIsSelected] = useState(false);
	const [district, setDistrict] = useState('');

	const [districtList, setDistrictList] = useState([]);

	const [municipalIsSelected, setMunicipalIsSelected] = useState(false);
	const [municipal, setMunicipal] = useState('');

	const [municipalList, setMunicipalList] = useState([]);

	useEffect(() => {
		let summary = {};
		const getSummary = async () => {
			if (!provinceIsSelected) {
				summary = await fetchCountryData();
			} else if (!districtIsSelected) {
				summary = await fetchProvinceData(province);
				const districts = await fetchDistrictList(province);
				setDistrictList(districts);
			} else if (!municipalIsSelected) {
				summary = await fetchDistrictData(district);
				const municipals = await fetchMunicipalList(district);
				setMunicipalList(municipals);
			} else {
				summary = await fetchMunicipalData(municipal);
			}
			setData(summary);
			console.log(municipalIsSelected);
		};
		getSummary();
	}, [provinceIsSelected, province, districtIsSelected, district, municipalIsSelected, municipal]);

	const setData = summary => {
		setInfected(summary.tested_positive);
		setActive(summary.tested_positive - summary.recovered - summary.deaths);
		setRecoveries(summary.recovered);
		setDeaths(summary.deaths);
		setLastUpdated(summary.updated_at);
	};

	const data = {
		infected,
		active,
		recoveries,
		deaths,
		lastUpdated,
	};

	return (
		<main id="main">
			<Header />
			<LocationSelectors setProvinceIsSelected={setProvinceIsSelected} setProvince={setProvince} provinceIsSelected={provinceIsSelected} districtList={districtList} setDistrict={setDistrict} setDistrictIsSelected={setDistrictIsSelected} districtIsSelected={districtIsSelected} municipalList={municipalList} setMunicipal={setMunicipal} setMunicipalIsSelected={setMunicipalIsSelected} />
			<Statistics data={data} />
			<Graph data={data} />
		</main>
	);
}

export default App;
