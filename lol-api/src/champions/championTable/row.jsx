import React, { Component } from 'react';
import { Link } from 'react-router';

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
		return <Link className='row' to={`/champions/${this.props.name}`}>
			<div className='img'>{this.props.img}</div>
			<div className='name'>{this.props.name}</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
			
		</Link>
	}
}

export default Row;