import React from 'react';

const DistrictSelector = props => {
	let districts = [];
	if (props.provinceIsSelected) {
		districts = props.districtList;
	}

	const handleOnchange = e => {
		if (e.target.value !== '0') {
			props.setDistrict(e.target.value);
			props.setDistrictIsSelected(true);
			props.setMunicipalIsSelected(false);
		} else {
			props.setDistrictIsSelected(false);
		}
	};
	return (
		<div className="form-group">
			<label htmlFor="district-select">Select District:</label>
			<select name="district-selector" id="district-select" onChange={handleOnchange}>
				<option value="0">-- Not Selected --</option>
				{districts.map(district => (
					<option key={district.id} value={district.id}>
						{district.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default DistrictSelector;
