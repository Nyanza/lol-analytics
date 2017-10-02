import { connect } from 'react-redux';
import * as actions from '../champions.actions.js';
import ChampionProfile from './championProfile.jsx';

const stateToProps = (state) => ({
	name: state.champions.profile.name,
	title: state.champions.profile.title,
	defaultSplash: state.champions.profile.skins[0].splash,
	stats: state.champions.profile.metrics,
	spells: state.champions.profile.spells
});

const dispatchToProps = (dispatch) => {
	return {
		fetchChampion: (id) => dispatch( actions.fetchChampion(id) )
	}
}

const Container = connect(
	stateToProps,
	dispatchToProps,
)(ChampionProfile);



export default Container;