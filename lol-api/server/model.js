// reference
// https://raw.githubusercontent.com/misspia/3D-lol-champion-selector-reactjs/master/src/json/allChampions.json

// /api/champions/ all
[
	{
		id: '1',
		name: 'Annie',
		img: 'filename of sprite image' // the smaller one
	},
	{
		id: '2',
		name: 'Olaf',
		img: 'champion2.png' 	// using example from the riot api
	},
	{
		...
	}
]

// api/champion
{
	name: 'Annie',
	title: 'the Dark Child',
	img: 'filename of full image', // the large one
	skins: [
		{
			id: 1000,
			name: 'default' // map all defaults to "original"  pls,
			img: {
				sprite: 'filename of sprite image',
				full: 'filename of full image'
			}
		},
		{
			id: 1002,
			name: 'Goth Annie',
			img: {
				sprite: '',
				full: ''
			}
		},
		{
			... 
			name: 'Red Riding Annie',
			...
		}
	],
	lore: 'the long ass paragraph about the champion',
	tags: [
		'Mage' // convert to lowercase
	],
	info: {
		attack: 2,
		defence: 3,
		magic: 10,
		difficulty: 6
	},
	stats: {
		base: {
			armor: float,
			attackdamage: float,
			attackrange:575,
			crit,
			hp,
			hpregen,
			movespeed,
			mp,
			mpregen,
			spellblock
		},
		perlevel: {
			armor: int,
			attackdamage: float,
			attackspeed,
			crit,
			hp,
			mp,
			mpregen,
			spellblock
		}
		
		
		
		
		
		attackspeedoffset:float,
		
		crit,
		critperlevel
	},
	spells: [
		{
			name: 'Disintegrate',
			img: 'the sprite image name (small one)',
			costType: 'Mana',
			costBurn: '60/65/70/75/80' 
		},
		{
			name: 'Incinarate',
			....
		}
	]
}














