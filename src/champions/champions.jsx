import React, { Component } from 'react';

import ChampionTable from './championTable/championTable.container.jsx';

import './champions.scss';

class Champions extends Component {
	componentWillMount() {
		this.props.fetchAllChampions();
	}
	render() {
		return <div className="champions">
			<h1>CHAMPIONS</h1>
			<div className='content'>
				<ChampionTable />
			</div>
			
		</div>;
	}
}

export default Champions;