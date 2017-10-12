import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './statsTable.scss';

class StatsTable extends Component {
	renderCells() {
		return Object.keys(this.props.stats).map((statKey, index) => {
			return this.renderCell(statKey, this.props.stats[statKey], index);
		});
	}
	renderCell(statKey, stat, index) {
		return <div key={index} className='cell'>
			<div className='value'>{stat}</div>
			<div className='name'>{this.formatStatName(statKey)}</div>
		</div>
	}
	formatStatName(name) {
		return name.replace('_', ' ');
	}
	render() {
		return <div className="statsTable">
			{this.renderCells()}
		</div>;
	}
}



export default StatsTable;
