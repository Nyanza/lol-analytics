import { combineReducers } from 'redux';
import championsReducer from './champions/champions.reducer.js';

const reducers = combineReducers({
	champions: championsReducer,
	// team: teamReducer
});
export default reducers;