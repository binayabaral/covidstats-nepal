import React from 'react';

import StatBox from './StatBox';

const Statistics = props => {
	console.log(props.description);
	const date = new Date(props.data.lastUpdated).toString();
	return (
		<section className="statistics">
			<div className="container">
				<h1>{`Statistics for Selected Region`}</h1>
				<div className="boxes">
					<StatBox boxFor="infected" count={props.data.infected} />
					<StatBox boxFor="active" count={props.data.active} />
					<StatBox boxFor="recoveries" count={props.data.recoveries} />
					<StatBox boxFor="deaths" count={props.data.deaths} />
				</div>
				<span className="updated-on">Updated on: {date}</span>
			</div>
		</section>
	);
};

export default Statistics;
