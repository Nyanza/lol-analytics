import { connect } from 'react-redux';
import * as actions from './champions.actions.js';
import Champions from './champions.jsx';

const stateToProps = (state) => ({
	allChampions: state.champions.all,
	selected: state.champions.selected
});

const dispatchToProps = (dispatch) => {
	return {
		fetchAllChampions: () => dispatch( actions.fetchAllChampions() ),
		fetchChampion: (id) => dispatch( actions.fetchChampion(id) )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps,
)(Champions)

export default Container;