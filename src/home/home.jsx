import React, { Component } from 'react';

import './home.scss';

class Matches extends Component {
	componentWillMount() {

	}
	renderOctocat(num) {
		let ocotocats = [];
		for(let index = 0; index < num; index ++) {
			ocotocats.push(<i className='ion-social-octocat'></i>);
		}
		return ocotocats;
	}
	render() {
		return <div className="home">
			<h1>League of Legends Analytics</h1>
			<div className='content'>
				<a className='github' href="https://github.com/Nyanza/lol-analytics">
					{this.renderOctocat(3)}
					View on Github
					{this.renderOctocat(3)}
				</a>
				<div className='current'>
					<h3>current features</h3>
					<ul>
						<li>champion select</li>
						<li>champion profile + analytics</li>
					</ul>
				</div>
				
				<div className='upcoming'>
					<h3>upcoming features</h3>
					<ul>
						<li>leaderboard</li>
						<li>live pro match data</li>
					</ul>
				</div>	
			</div>
		</div>;
	}
}

export default Matches;