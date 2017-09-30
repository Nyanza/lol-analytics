import React, { Component } from 'react';
import { Link } from 'react-router';

import Metadata from './metadata.js';
import './nav.scss';

class Nav extends Component {
	constructor() {
		super();
		this.state = {
			activeIndex: 0
		}
	}
	renderLinks() {
		return Metadata.map((link, index) => {
			return this.renderLink(link, index);
		});
	}
	renderLink(link, index) {
		const active = this.state.activeIndex === index ? 'active' : '';

		return <Link key={index} to={link.to}
			className={`link ${active}`}
			onClick={() => this.handleClick(index)}>
			<i className={link.icon}> </i>
			<div>{link.label}</div>
		</Link>;
	}
	handleClick(index) {
		this.setState({
			activeIndex: index
		})
	}
	render() {
		return <div className="nav">
			{this.renderLinks()}
		</div>;
	}

}

export default Nav;