import React, { Component } from 'react';

import ChampionTable from './championTable/championTable.container.jsx';

import './champions.scss';

class Champions extends Component {
	componentWillMount() {
		this.props.fetchAllChampions();
	}
	render() {
		return <div className="champions">
			CHAMPIONS
			<ChampionTable />
		</div>;
	}
}

export default Champions;