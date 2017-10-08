import React, { Component } from 'react';

import ChampionTable from './championTable/championTable.container.jsx';
import SearchBar from '../shared/searchBar/searchBar.jsx';

import './champions.scss';

class Champions extends Component {
	constructor(props) {
		super(props);
		this.handleSearch = this.handleSearch.bind(this);
	}
	componentWillMount() {
		this.props.fetchAllChampions();
	}
	handleSearch(searchString) {
		const filteredList = this.props.rawChampions.filter((champion) => {
			return champion.name.toLowerCase().includes(searchString.toLowerCase());
		});
		this.props.filterChampions(filteredList);
	}
	render() {
		return <div className="champions">
			<h1>CHAMPIONS</h1>
			<div className='content'>
				<SearchBar onChange={this.handleSearch} placeholder='search'/>
				<ChampionTable />
			</div>
			
		</div>;
	}
}

export default Champions;