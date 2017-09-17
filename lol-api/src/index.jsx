import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store.js';

import './index.scss';

import Champions from './champions/champions.container.jsx';

class App extends Component {
	render() {
		return <div className="app">
			<Champions />
		</div>;
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);




