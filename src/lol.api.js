import axios from 'axios';

const buildUrl = (path) => {
	return `${API_HOST}/${path}`;
};

const API = {
	allChampions: () => {
		return buildUrl(`api/v1/champions/`);
	},
	champion: (id) => {
		return buildUrl(`api/v1/champions/${id}`);
	}
};

export default API;
