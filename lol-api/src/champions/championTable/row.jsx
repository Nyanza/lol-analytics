import React, { Component } from 'react';

class Row extends Component {
	constructor(props) {
		super(props);
		// props = {
		// 	name:'',
		// 	img: '',
		// 	stats: [
		// 		{title: '', value: ''}
		// 	],
		// 	onClick: () => {}
		// }
	}
	render() {
		return <div
			className='row' onClick={this.props.onClick}>
			<div className='img'>{this.props.img}</div>
			<div className='name'>{this.props.name}</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
			
		</div>
	}
}

export default Row;