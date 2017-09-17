import axios from 'axios';
// import API from '../lol.api.js';


export function fetchAllChampions() {
	const url = 'http://localhost:8000/api/champions/Akali';
	return {
		type: "FETCH_ALL_CHAMPIONS",
		payload: axios.get(url)
	}
}

export function fetchChampion() {
	console.log("ACTIONS SINGLE")
	const url = 'http://localhost:8000/api/champions/Akali';
	return {
		type: "FETCH_CHAMPION",
		payload: axios.get(url)
	}
}
