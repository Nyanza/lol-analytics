import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header/header.jsx';
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
		return <Header 
			img={this.props.defaultSplash}
			headline={this.props.name}
			subheadline={this.props.title}/>
	}
	render() {
		return <div className="championProfile">
			{this.renderHeader()}
			<div className='content'>
				
			</div>
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