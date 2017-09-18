import { combineReducers } from 'redux';
import championsReducer from './champions/champions.reducer.js';

const reducers = combineReducers({
	champions: championsReducer,
	// router: routerReducer
	// team: teamReducer
});
export default reducers;