import { connect } from 'react-redux';

import * as actions from '../champions.actions.js';
import ChampionTable from './championTable.jsx';

const stateToProps = (state) => ({
	allChampions: state.champions.all,
	selected: state.champions.selected
});

const dispatchToProps = (dispatch) => {
	return {
		fetchChampion: (id) => dispatch( actions.fetchChampion(id) )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps
)(ChampionTable)

export default Container;