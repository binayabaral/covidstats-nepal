import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const Graph = props => {
	const chart = (
		<Bar
			plugins={[ChartDataLabels]}
			data={{
				labels: ['Infected', 'Active', 'Recoveries', 'Deaths'],
				datasets: [
					{
						label: 'cases',
						backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(255, 99, 71, 0.5)', 'rgba(0, 128, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
						data: [props.data.infected, props.data.active, props.data.recoveries, props.data.deaths],
					},
				],
			}}
			options={{
				plugins: {
					datalabels: {
						anchor: 'end',
						align: 'end',
						offset: -4,
						labels: {
							title: {
								font: {
									size: 16,
									weight: 600,
								},
							},
						},
						color: ['rgb(0, 0, 255)', 'rgb(255, 99, 71)', 'rgb(0, 128, 0)', 'rgb(255, 0, 0)'],
					},
				},
				tooltips: false,
				scales: {
					xAxes: [
						{
							gridLines: {
								display: false,
							},
						},
					],
					yAxes: [
						{
							ticks: {
								beginAtZero: true,
							},
						},
					],
				},
				title: {
					display: true,
					text: `Current state in Selected Region`,
				},
				legend: {
					display: false,
				},
			}}
		/>
	);
	return (
		<section className="graph">
			<div className="container">
				<div className="chart">{chart}</div>
				<span className="source">Data Source: Nepal Corona Open Data API</span>
			</div>
		</section>
	);
};

export default Graph;
