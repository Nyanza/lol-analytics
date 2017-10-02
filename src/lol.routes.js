const Routes = {
	home: {
		home: () => {
			return '/';
		}
	},
	champions: {
		home: () => {
			return '/champions';
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