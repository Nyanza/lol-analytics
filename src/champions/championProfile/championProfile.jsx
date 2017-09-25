import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './championProfile.scss';

class ChampionProfile extends Component {
	componentWillMount() {
		const champName = this.props.params.name;
		this.props.fetchChampion(champName);
	}
	renderContent() {
		return <div className='content'>
			
		</div>
	}
	renderSkins() {
		return this.props.skins.map((skin, index) => {
			return <div key={index}>
				{skin.name}
			</div>
		})
	}
	render() {
		console.log(this.props.skins)
		return <div className="championProfile">
			{this.props.params.name}
			<h1>{this.props.name}</h1>
			<div>{this.props.title}</div>
			{this.renderSkins()}
		</div>;
					// <div>tags: {this.props.tags.join(', ')}</div>
			// <div>stats: {JSON.stringify(this.props.name, null, 4)}</div>
	}
}

export default ChampionProfile;