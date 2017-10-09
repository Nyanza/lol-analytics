import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter.jsx';
import './counters.scss';

class Counters extends Component {
	renderWeak() {
		return <div className='weak'>
			<div className='subtitle'>Champions that {this.props.name} counters</div>
			<Counter champions={this.props.weak} />
		</div>
	}
	renderStrong() {
		return <div className='strong'>
			<div className='subtitle'>Champions that counter {this.props.name}</div>
			<Counter champions={this.props.strong} />
		</div>
	}
	render() {
		return <div className='counters'>
			<div className='title'>Counters (win rate)</div>
			<div className='content'>
				{this.renderWeak()}
				{this.renderStrong()}
			</div>
	
		</div>
	}
}

Counters.defaultProps = {
	name: '',
	weak: [ {name: '', win_rate: '', img: ''} ],
	strong: []

};

export default Counters;