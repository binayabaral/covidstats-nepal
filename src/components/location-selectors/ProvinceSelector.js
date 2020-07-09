import React from 'react';

const ProvinceSelector = props => {
	const handleProvinceChange = e => {
		if (e.target.value !== '0') {
			props.setProvince(e.target.value);
			props.setProvinceIsSelected(true);
			props.setDistrictIsSelected(false);
			props.setMunicipalIsSelected(false);
		} else {
			props.setProvinceIsSelected(false);
		}
	};
	return (
		<div className="form-group">
			<label htmlFor="province-select">Select Province:</label>
			<select name="province-selector" id="province-select" onChange={handleProvinceChange}>
				<option value="0">-- Not Selected --</option>
				<option value="1">Province 1</option>
				<option value="2">Province 2</option>
				<option value="3">Bagmati Pradesh</option>
				<option value="4">Gandaki Pradesh</option>
				<option value="5">Province 5</option>
				<option value="6">Karnali Pradesh</option>
				<option value="7">Sudurpashchim Pradesh</option>
			</select>
		</div>
	);
};

export default ProvinceSelector;
