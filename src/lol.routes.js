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
	}
};

module.exports = Routes;