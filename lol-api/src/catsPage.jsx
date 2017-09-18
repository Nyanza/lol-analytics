import React, { Component } from 'react';
import { Link } from 'react-router';

class CatsPage extends Component {
	render() {

		return <div className="CatsPage">
			KITTIeS MEOWMEOW NYANZA
			<Link to='/meow/catname'>?????</Link>
			{this.props.children}
		</div>;
	}
}

export default CatsPage;