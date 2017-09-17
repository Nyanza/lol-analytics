import axios from 'axios';
import API from '../lol.api.js';


export function fetchAllChampions() {
	return {
		type: "FETCH_ALL_CHAMPIONS",
		payload: axios.get(API.allChampions())
	}
}

export function fetchChampion(id) {
	return {
		type: "FETCH_CHAMPION",
		payload: axios.get(API.champion(id))
	}
}
