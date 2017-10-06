import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './searchBar.scss';

class SearchBar extends Component {
	constructor() {
		super();
		this.state = { searchString: ''}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({ searchString: e.target.value });
		this.props.onChange(e.target.value);
	}
	render() {
		// return <div className="searchBar">
		// 	<input
		// 		type="text"
		// 		onChange={this.handleChange}
		// 		placeholder={this.props.placeholder}
		// 		value={this.state.searchString}/>
		// </div>;
		return <input
			className="searchBar"
			type="text"
			onChange={this.handleChange}
			placeholder={this.props.placeholder}
			value={this.state.searchString}/>
	}
}

SearchBar.defaultProps = {
	onChange: () => {},
	placeholder: ''
}
export default SearchBar;