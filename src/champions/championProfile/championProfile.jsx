import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header/header.jsx';
import FilterOptions from './filterOptions/filterOptions.jsx';
import StatsTable from './statsTable/statsTable.jsx';
import SkillOrder from './skillOrder/skillOrder.jsx';
import Build from './build/build.jsx';
import Counters from './counters/counters.jsx';

import './championProfile.scss';

class ChampionProfile extends Component {
	constructor() {
		super();
		this.state = { rank: '', lane: ''};
		this.handleFilterSelect = this.handleFilterSelect.bind(this);
	}
	componentWillMount() {
		const champName = this.props.params.name;
		this.props.fetchChampion(champName);
	}
	renderContent() {
		return <div className='content'>
			{this.renderFilters()}
			{this.renderMetrics()}
		</div>
	}
	renderMetrics() {
		if(this.state.lane == '' && this.state.rank == '') return;
		const filteredMetrics = this.props.stats[this.state.rank][this.state.lane];
		return <div className='metrics'>
			<StatsTable stats={filteredMetrics.stats}/>
			<SkillOrder order={filteredMetrics.skill_order} spells={this.props.spells}/>
			<Build items={filteredMetrics.build}/>
			<Counters weak={filteredMetrics.counters.weak} strong={filteredMetrics.counters.strong}/>
		</div>
	}
	renderFilters() {
		if(!this.props.stats.platplus) return;
		const rankKeys = Object.keys(this.props.stats);
		const defaultRank = this.state.rank == '' ? rankKeys[0] : this.state.rank;
		const laneKeys = Object.keys(this.props.stats[defaultRank]);
		return <FilterOptions
			ranks={rankKeys}
			activeRank={this.state.rank}
			lanes={laneKeys}
			activeLane={this.state.lane}
			onChange={this.handleFilterSelect} />;
	}
	handleFilterSelect(filterName, filterValue) {
		if(filterName != 'rank') return this.setState({ [filterName]: filterValue });
		const laneKeys = Object.keys(this.props.stats[filterValue]);
		const defaultLane = laneKeys[0];
		const lane = laneKeys.includes(this.state.lane) ? this.state.lane : defaultLane;
		return this.setState({ [filterName]: filterValue, lane });
	}
	renderHeader() {
		return <Header 
			img={this.props.defaultSplash}
			headline={this.props.name}
			subheadline={this.props.title}/>
	}
	render() {
		return <div className="championProfile">
			{this.renderHeader()}
			{this.renderContent()}
		</div>;
	}
}

ChampionProfile.defaultProps = {
	name: '',
	title: '',
	img: '',
	defaultSplash: '' ,
	stats: {},
	spells: {}
};

export default ChampionProfile;