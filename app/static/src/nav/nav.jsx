import React, { Component } from 'react';
import { Link } from 'react-router';

import Metadata from './metadata.js';
import './nav.scss';

class Nav extends Component {
	constructor() {
		super();
		this.state = { activeIndex: 0 };
	}
	componentDidMount() {
		this.setInitialActiveTab(this.props.current.toLowerCase());
	}
	setInitialActiveTab(path) {
		// skip first index since default state is set to home index
		for(let index = 1; index < Metadata.length; index ++ ) {
			const route = Metadata[index].to;
			if(path.includes(route)) return this.handleClick(index);
		}
	}
	renderLinks() {
		return Metadata.map((link, index) => {
			return this.renderLink(link, index);
		});
	}
	renderLink(link, index) {
		const active = this.state.activeTab === link.label ? 'active' : '';

		return <Link key={index} to={link.to}
			className={`link ${active}`}
			onClick={() => this.handleClick(link.label)}>
			<i className={link.icon}> </i>
			<div>{link.label}</div>
		</Link>;
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
		this.setState({ activeIndex: index });
	}
	render() {
		return <div className="nav">
			{this.renderLinks()}
		</div>;
	}

}

export default Nav;