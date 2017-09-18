import React, { Component } from 'react';

class Kitty extends Component {
	render() {
		console.log("PARAMS", this.props.params)
		return <div className="Kitty">
			purrrrrr
			{this.props.params.name}
		</div>;
	}
}

export default Kitty;