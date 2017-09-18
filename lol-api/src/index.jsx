import React  from 'react';
import ReactDOM from 'react-dom';

import store from './store.js';
import Root from './router.jsx';

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);
