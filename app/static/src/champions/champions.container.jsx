import { connect } from 'react-redux';
import * as actions from './champions.actions.js';
import Champions from './champions.jsx';

const stateToProps = (state) => ({
	rawChampions: state.champions.allRaw,
	selected: state.champions.selected
});

const dispatchToProps = (dispatch) => {
	return {
		fetchAllChampions: () => dispatch( actions.fetchAllChampions() ),
		fetchChampion: (id) => dispatch( actions.fetchChampion(id) ),
		filterChampions: (searchString) => dispatch( actions.filterChampions(searchString))
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps,
)(Champions)

export default Container;