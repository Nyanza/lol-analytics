import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import Row from './row.jsx';
import './championTable.scss';


class ChampionTable extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	renderChampions() {
		return this.props.allChampions.map((champ, index) => {
			return this.renderChampion(champ, index);
		});
	}
	renderChampion(champ, index) {
		return <LazyLoad key={index}>
			<Row name={champ.name}
				img={champ.squareImg}
				stats={champ.metrics}
				onClick={ () => {this.handleClick(champ.name) }}/>
			</LazyLoad>
	}
	renderHeaderRow() {
		const headers = ['', 'name', 'stat1', 'stat2', 'stat3', 'stat4'];
		return headers.map((header, index) => {
			return <div key={index}>
				{header}
			</div>
		})
	}
	handleClick(id) {
		this.props.fetchChampion(id);
	}
	render() {
		return <div className="championTable">
			<div className='headerRow row'>
				{this.renderHeaderRow()}
			</div>
			<div className='dataRows'>
				{this.renderChampions()}
			</div>
		</div>;
	}
}

export default ChampionTable;