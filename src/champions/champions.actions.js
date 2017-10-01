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

export function getChampionSplashSource(id) {
	return {
		type: "GET_CHAMPION_SPLASH_SOURCE",
		payload: API.championSplash(id)
	}
}

export function getChampionLoaderSource(id) {
	return {
		type: "GET_CHAMPION_LOADER_SOURCE",
		payload: API.championLoader(id)
	}
}

export function getChampionSquareSource(id) {
	return {
		type: "GET_CHAMPION_SQUARE_SOURCE",
		payload: API.championSquare(id)
	}
}