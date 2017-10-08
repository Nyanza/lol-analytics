import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.scss';

class ChampionProfile extends Component {
	render() {
		return <div className='header'>
			<div className='image'>
				<img src={this.props.img} alt={this.props.headline}/>
			</div>
			<div className='text'>
				<div className='headline'>{this.props.headline}</div>
				<div className='subheadline'>{this.props.subheadline}</div>
			</div>
		</div>
	}
}

ChampionProfile.defaultProps = {
	headline: '',
	subheadline: '',
	img: '',
};

export default ChampionProfile;