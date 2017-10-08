import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Counter from './counter.jsx';
import './counters.scss';

class Counters extends Component {
	renderWeak() {
		return <div className='weak'>
			<div>Weak</div>
			<Counter champions={this.props.weak} />
		</div>
	}
	renderStrong() {
		return <div className='strong'>
			<div>Strong</div>
			<Counter champions={this.props.strong} />
		</div>
	}
	render() {
		console.log(this.props);
		return <div className='counters'>
			<div className='title'>Counters</div>
			{this.renderWeak()}
			{this.renderStrong()}
		</div>
	}
}

Counters.defaultProps = {
	weak: [ {name: '', win_rate: '', img: ''} ],
	strong: []

};

export default Counters;