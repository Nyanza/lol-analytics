import axios from 'axios';

const buildUrl = (path) => {
	return `${API_HOST}/${path}`;
};

const API = {
	allChampions: () => {
		return buildUrl(`api/champions/`);
	},
	champion: (id) => {
		return buildUrl(`api/champions/${id}`);
	}
};

export default API;