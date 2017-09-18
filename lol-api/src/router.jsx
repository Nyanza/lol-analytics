import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import Champions from './champions/champions.container.jsx';
import ChampionProfile from './champions/championProfile/championProfile.container.jsx';

import Routes from './lol.routes.js';
import './index.scss';

class App extends Component {
	render() {
		return <div className="app">
			{this.props.children}
		</div>;
	}
}

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Champions}></IndexRoute>
				<Route path={Routes.champions.profile().get} component={ChampionProfile} />			
			</Route>
		</Router>
	</Provider>	
)

export default Root;