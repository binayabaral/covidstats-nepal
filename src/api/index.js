import axios from 'axios';

const countryDataURL = 'https://nepalcorona.info/api/v1/data/nepal';
const summaryDataURL = 'https://data.nepalcorona.info/api/v1/covid/summary';
const districtsURL = 'https://data.nepalcorona.info/api/v1/districts';
const municipalURL = 'https://data.nepalcorona.info/api/v1/municipals';

export const fetchCountryData = async () => {
	try {
		const { data } = await axios.get(countryDataURL);
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const fetchProvinceData = async inProvince => {
	let reqData = {
		tested_positive: 0,
		recovered: 0,
		deaths: 0,
		updated_at: Date.now(),
	};
	try {
		const {
			data: { province },
		} = await axios.get(summaryDataURL);
		province.cases.forEach(element => {
			if (element.province === parseInt(inProvince)) {
				reqData.tested_positive = element.count;
			}
		});
		province.recovered.forEach(element => {
			if (element.province === parseInt(inProvince)) {
				reqData.recovered = element.count;
			}
		});
		province.deaths.forEach(element => {
			if (element.province === parseInt(inProvince)) {
				reqData.deaths = element.count;
			}
		});
	} catch (error) {
		console.log(error);
	}
	return reqData;
};

export const fetchDistrictList = async province => {
	let districtList = [];
	try {
		const { data } = await axios.get(districtsURL);
		data.forEach(element => {
			if (parseInt(province) === element.province) {
				districtList.push({
					id: element.id,
					name: element.title,
				});
			}
		});
		return districtList;
	} catch (error) {
		console.log(error);
	}
};

export const fetchDistrictData = async inDistrict => {
	let reqData = {
		tested_positive: 0,
		recovered: 0,
		deaths: 0,
		updated_at: Date.now(),
	};
	try {
		const {
			data: { district },
		} = await axios.get(summaryDataURL);
		district.cases.forEach(element => {
			if (element.district === parseInt(inDistrict)) {
				reqData.tested_positive = element.count;
			}
		});
		district.recovered.forEach(element => {
			if (element.district === parseInt(inDistrict)) {
				reqData.recovered = element.count;
			}
		});
		district.deaths.forEach(element => {
			if (element.district === parseInt(inDistrict)) {
				reqData.deaths = element.count;
			}
		});
	} catch (error) {
		console.log(error);
	}
	return reqData;
};

export const fetchMunicipalList = async district => {
	let municipalList = [];
	try {
		const { data } = await axios.get(municipalURL);
		data.forEach(element => {
			if (parseInt(district) === element.district) {
				municipalList.push({
					id: element.id,
					name: element.title,
				});
			}
		});
		return municipalList;
	} catch (error) {
		console.log(error);
	}
};

export const fetchMunicipalData = async inMunicipal => {
	let reqData = {
		tested_positive: 0,
		recovered: 0,
		deaths: 0,
		updated_at: Date.now(),
	};
	try {
		const {
			data: { municipality },
		} = await axios.get(summaryDataURL);
		municipality.cases.forEach(element => {
			if (element.municipality === parseInt(inMunicipal)) {
				reqData.tested_positive = element.count;
			}
		});
		municipality.recovered.forEach(element => {
			if (element.municipality === parseInt(inMunicipal)) {
				reqData.recovered = element.count;
			}
		});
		municipality.deaths.forEach(element => {
			if (element.municipality === parseInt(inMunicipal)) {
				reqData.deaths = element.count;
			}
		});
	} catch (error) {
		console.log(error);
	}
	return reqData;
};
