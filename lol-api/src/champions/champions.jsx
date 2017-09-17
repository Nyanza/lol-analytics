import React, { Component } from 'react';

import './champions.scss';

class Champions extends Component {
	componentWillMount() {
		this.props.fetchChampion();
	}
	render() {
		console.log(this.props.selected)
		return <div className="champions">
			champions component
		</div>;
	}
}

export default Champions;