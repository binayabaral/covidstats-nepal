import React from 'react';

const MunicipalitySelector = props => {
	console.log(props);
	let municipals = [];
	if (props.districtIsSelected) {
		municipals = props.municipalList;
	}
	const handleOnchange = e => {
		if (e.target.value !== '0') {
			props.setMunicipal(e.target.value);
			props.setMunicipalIsSelected(true);
		} else {
			props.setMunicipalIsSelected(false);
		}
	};
	return (
		<div className="form-group">
			<label htmlFor="municipality-select">Select Municipality:</label>
			<select name="municipality-selector" id="municipality-select" onChange={handleOnchange}>
				<option value="0">-- Not Selected --</option>
				{municipals.map(municipal => (
					<option key={municipal.id} value={municipal.id}>
						{municipal.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default MunicipalitySelector;
