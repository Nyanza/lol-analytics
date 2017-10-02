import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './skillOrder.scss';

class SkillOrder extends Component {
	constructor() {
		super();
		this.state = { rowCells: [] };
	}
	componentDidMount() {
		const cells = Array.apply(null, { length: this.props.order.length }).map(Number.call, Number);
		this.setState({ rowCells: cells });
	}
	renderRows() {
		const skills = ['q', 'w', 'e', 'r'];
		const rowLength = this.props.order.length;
		return skills.map((skill, index) => {
			return this.renderRow(skill, index, rowLength);
		});
	}
	renderRow(skillKey, index, rowLength) {
		// <div className='image cell'>skill img</div>
		const spell = this.props.skills[skillKey]
		return <div key={index} className='row'>
			<img src={spell.image} alt={spell.name}/>
			{this.renderSkillCells(skillKey)}
		</div>
	}
	renderHeaderRow() {
		const cells =  this.state.rowCells.map((cell, index) => {
			return this.renderHeaderCell(index);	
		});
		return <div className='row headerRow'>
			<div className='headerOffset'></div>
			{cells}
		</div>
	}
	renderHeaderCell(index) {
		return <div key={index} className='cell'>{index}</div>
	}
	renderSkillCells(skillKey) { 
		return this.state.rowCells.map((cell, index) => {
			return this.renderSkillCell(skillKey, index);
		});
	}
	renderSkillCell(skillKey, index) {
		const target = this.props.order[index] == skillKey; 
		return <div key={index} className={`cell skill ${target ? 'active' : ''}`}>
			{target ? skillKey : ''}	
		</div>
	}
	render() {
		return <div className="skillOrder">
			<div className='title'>highest win % skill order</div>
			<div className='grid'>
				{this.renderHeaderRow()}
				{this.renderRows()}
			</div>
			
		</div>;
	}
}

SkillOrder.defaultProps = {
	order: [],
	spells: {}
};

export default SkillOrder;
