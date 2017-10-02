import Routes from '../lol.routes.js';

const Metadata = [
	{
		icon: 'ion-android-home',
		label: 'home',
		to: Routes.home.home(),
	},
	{
		icon: 'ion-android-star',
		label: 'champions',
		to: Routes.champions.home()
	},
	{
		icon: 'ion-trophy',
		label: 'ranking',
		to: Routes.rankings.home()		
	},
	{
		icon: 'ion-ios-game-controller-b',
		label: 'pro matches',
		to: Routes.matches.home()	
	}
];

export default Metadata;