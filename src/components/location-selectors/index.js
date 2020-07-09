import React from 'react';

import ProvinceSelector from './ProvinceSelector';
import DistrictSelector from './DistrictSelector';
import MunicipalitySelector from './MunicipalitySelector';

const LocationSelectors = props => {
	return (
		<section className="location-selectors">
			<div className="container">
				<ProvinceSelector setProvinceIsSelected={props.setProvinceIsSelected} setProvince={props.setProvince} setDistrictIsSelected={props.setDistrictIsSelected} setMunicipalIsSelected={props.setMunicipalIsSelected} />
				<DistrictSelector provinceIsSelected={props.provinceIsSelected} districtList={props.districtList} setDistrict={props.setDistrict} setDistrictIsSelected={props.setDistrictIsSelected} setMunicipalIsSelected={props.setMunicipalIsSelected} />
				<MunicipalitySelector districtIsSelected={props.districtIsSelected} municipalList={props.municipalList} setMunicipal={props.setMunicipal} setMunicipalIsSelected={props.setMunicipalIsSelected} />
			</div>
		</section>
	);
};

export default LocationSelectors;
