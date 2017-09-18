import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store from './store.js';

import './index.scss';

import Champions from './champions/champions.container.jsx';
import CatsPage from './catsPage.jsx';

// class App extends Component {
// 	render() {
// 		return <div className="app">
// 			<Champions />
// 		</div>;
// 	}
// }
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
				<Route path='/cats' component={CatsPage}></Route>
			</Route>
		</Router>
	</Provider>	
);

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );
