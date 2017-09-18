const Routes = {
	champions: {
		home: () => {
			return '/';
		},
		profile: (name) => {
			return {
				get: '/champions/:name',
				set: `/champions/${name}`
			}
		}
	}
};

module.exports = Routes;