import React, { Component } from 'react';

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
		return <Row key={index}
			name={champ.name}
			img={champ.img}
			onClick={ () => {this.handleClick(champ.name) }}/>
	}
	handleClick(id) {
		this.props.fetchChampion(id);
	}
	render() {
		console.log(this.props.selected)
		return <div className="championTable">
			{this.renderChampions()}
		</div>;
	}
}

export default ChampionTable;