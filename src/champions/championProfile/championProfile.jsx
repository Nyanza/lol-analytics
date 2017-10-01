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
	renderHeader() {
		return <div className='header'>
			<img src={this.props.defaultSplash} alt={this.props.name} className='image'/>
			<div className='headline'>
				<div className='name'>{this.props.name}</div>
				<div className='title'>{this.props.title}</div>
			</div>
			
		</div>
	}
	render() {
		// console.log(this.props)
		return <div className="championProfile">
			{this.renderHeader()}
			<div>{this.props.title}</div>
			{this.renderSkins()}
		</div>;
	}
}

ChampionProfile.defaultProps = {
	name: '',
	title: '',
	img: '',
	skins: [],
	defaultSplash: '' 
};

export default ChampionProfile;