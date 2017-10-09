import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './build.scss';

class Build extends Component {
	renderItems() {
		const items = this.props.items.map((item, index) => {
			return this.renderItem(item, index);
		});
		return <div className='items'>{items}</div>
	}
	renderItem(item, index) {
		return <div key={index} className='item'>
			<img src={item.img} alt={item.id}/>
		</div>
	}
	render() {
		console.log(this.props)
		return <div className='build'>
			<div className='title'>Build</div>
			{this.renderItems()}
		</div>
	}
}

Build.defaultProps = {
	items: [
		{ src: '', id: '' }
	]
};

export default Build;