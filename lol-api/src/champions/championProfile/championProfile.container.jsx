import { connect } from 'react-redux';
import * as actions from '../champions.actions.js';
import ChampionProfile from './championProfile.jsx';

ChampionProfile.defaultProps = {
	name: '',
	title: '',
	img: '',
	skins: []
};

const stateToProps = (state) => ({
	name: state.champions.selected.name,
	title: state.champions.selected.title,
	img: state.champions.selected.img,
	skins: state.champions.selected.skins,
	// tags: state.champions.selected.tags,
	// stats: state.champions.selected.stats,
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