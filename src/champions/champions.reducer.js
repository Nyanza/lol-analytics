const initialState = {
	all: [],
	profileStats: {},
	splashSrc: '',
	loaderSrc: '',
	squareSrc: ''
};

export default function pokedexReducer(state=initialState, action) {
	switch(action.type) {
		case "FETCH_ALL_CHAMPIONS": {
			return {...state, all: action.payload.data };
		}
		case "FETCH_CHAMPION": {
			return {...state, profileStats: action.payload.data}
		}
		case "GET_CHAMPION_SPLASH_SOURCE": {
			return {...state, splashSrc: action.payload}
		}
		case "GET_CHAMPION_LOADER_SOURCE": {
			return {...state, loaderSrc: action.payload}
		}
		case "GET_CHAMPION_SQUARE_SOURCE": {
			return {...state, squareSrc: action.payload}
		}
		default: {
			console.log("Action not found: ", action.type);
			return { ...state};
		}
	}
}