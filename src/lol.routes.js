const Routes = {
	champions: {
		home: () => {
			return '/';
		},
		profile: (name) => {
			return {
				get: '/champions/:name',
				to: `/champions/${name}`
			}
		}
	},
	matches: {
		home: () => {
			return '/matches';
		}
	},
	rankings: {
		home: () => {
			return '/rankings';
		}
	}
};

module.exports = Routes;