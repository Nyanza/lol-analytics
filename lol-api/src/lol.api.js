import axios from 'axios';
import config from '../config/local.json';


const buildUrl = (path) => {
	return `${config.host}${path}`;
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