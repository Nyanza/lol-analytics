const initialState = {
	all: [],
	selected: {}
};

export default function pokedexReducer(state=initialState, action) {
	switch(action.type) {
		case "FETCH_ALL_CHAMPIONS": {
			return {...state, all: action.payload.data };
		}
		case "FETCH_CHAMPION": {
			return {...state, selected: action.payload.data[0] };
		}
		default: {
			console.log("Action not found: ", action.type);
			return { ...state};
		}
	}
}