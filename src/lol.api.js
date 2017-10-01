import axios from 'axios';

const buildUrl = (path) => {
	return `${API_HOST}/api/v1/${path}`;
};

const API = {
	allChampions: () => {
		return buildUrl(`champions/`);
	},
	champion: (id) => {
		return buildUrl(`champions/${id}`);
	},
	championSplash: (id) => {
		return buildUrl(`assets/splash/${id}`)
	},
	championLoader: (id) => {
		return buildUrl(`assets/loader/${id}`)
	},
	championSquare: (id) => {
		return buildUrl(`assets/square/${id}`)
	}
};

export default API;
