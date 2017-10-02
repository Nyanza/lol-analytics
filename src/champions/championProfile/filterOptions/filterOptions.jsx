import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './filterOptions.scss';

class FilterOptions extends Component {
	componentDidMount() {
		this.props.onChange('rank', this.props.ranks[0]);
		this.props.onChange('lane', this.props.lanes[0]);
	}
	renderFilters() {
		return <div className='filterOptions'>
			{this.renderRanks()}
			{this.renderLanes()}
		</div>
	}
	renderRanks() {
		const ranks = this.props.ranks.map((rank, index) => {
			return this.renderRank(rank, index);
			
		});
		return <div className='rankFilter'>
			<div className='title'>select rank</div>
			<div className='options'>{ranks}</div>
		</div>
	}
	renderRank(rank, index) {
		const checked = this.props.activeRank == rank;
		return <div key={index} className={`option ${checked ? 'active' : ''}`}>
			<input type="radio"
				name='rank'
				value={rank}
				onClick={(e) => this.props.onChange('rank', e.target.value)}
				checked={checked} />
			<div className='label'>{rank}</div>
		</div>
	}
	renderLanes() {
		const lanes = this.props.lanes.map((lane, index) => {
			return this.renderLane(lane, index);
		});
		return <div className='laneFilter'>
			<div className='title'>select lane</div>
			<div className='options'>{lanes}</div>
		</div>
	}
	renderLane(lane, index) {
		const checked = this.props.activeLane == lane;
		return <div key={index} className={`option ${checked ? 'active' : ''}`}>
			<input type="radio"
				name='lane'
				value={lane}
				onClick={(e) => this.props.onChange('lane', e.target.value)}
				checked={checked} />
			<div className='label'>{lane}</div>
		</div>
	}
	render() {
		return this.renderFilters();
	}
}

FilterOptions.defaultProps = {
	lanes: [],
	activeLane: '',
	ranks: [],
	activeRank: '',
	onChange: () => {}
};

export default FilterOptions;