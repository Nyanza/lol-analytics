import React, { Component } from 'react';
import { Link } from 'react-router';
import { champions as ChampRoutes } from '../../lol.routes.js';
class Row extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div className='row'>
			<div className='img'>{this.props.img}</div>
			<div className='name'>
				<Link to={ChampRoutes.profile(this.props.name).to}
					target='_blank'>
					{this.props.name}
				</Link>
			</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
			<div className='stat'>stat</div>
		</div>
	}
}

Row.defaultProps = {
	name:'',
	img: '',
	stats: [
		{title: '', value: ''}
	],
	onClick: () => {}
}

export default Row;