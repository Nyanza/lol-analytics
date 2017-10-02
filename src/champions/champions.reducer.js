const initialState = {
	all: [],
	profile: {
		name: '',
		title: '',
		key: '',
		skins: [
			{loading: '', splash: '', num: 0, id: 0, name: ''}
		],
		info: {},
		metrics: {}
	},
};

export default function pokedexReducer(state=initialState, action) {
	switch(action.type) {
		case "FETCH_ALL_CHAMPIONS": {
			return {...state, all: action.payload.data };
		}
		case "FETCH_CHAMPION": {
			return {...state, profile: action.payload.data}
		}
		default: {
			console.log("Action not found: ", action.type);
			return { ...state};
		}
	}
}