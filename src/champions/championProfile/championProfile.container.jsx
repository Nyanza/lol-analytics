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
	name: state.champions.profileStats.name,
	title: state.champions.profileStats.title,
	img: state.champions.profileStats.img,
	skins: state.champions.profileStats.skins,
	tags: state.champions.profileStats.tags,
	stats: state.champions.profileStats.stats
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