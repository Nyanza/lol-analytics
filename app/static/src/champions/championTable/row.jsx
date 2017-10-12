import React, { Component } from 'react';
import { Link } from 'react-router';
import { champions as ChampRoutes } from '../../lol.routes.js';
class Row extends Component {
	constructor(props) {
		super(props);
	}
	renderStats() {
		return Object.keys(this.props.stats).map((key, index) => {
			return <div key={index} className={`stat {key}`}>
				{this.props.stats[key]}
			</div>
		});
	}
	render() {
		return <div className='row'>
			<img src={this.props.img} alt={this.props.name} className='image'/>
			<div className='name'>
				<Link to={ChampRoutes.profile(this.props.name).to}
					target='_blank'>
					{this.props.name}
				</Link>
			</div>
			{this.renderStats()}
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