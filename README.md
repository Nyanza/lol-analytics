# League of Legends Analytics Tool


## API Endpoints

### Champions

#### POST /


#### GET /champions/

returns an array of all champions in the form of objects:

```
{
	name: "Wukong"
}

```

#### GET /champions/:championName

returns a champion as an object

```
{
	name: "Akali",
	title: "the Fist of Shadow",
	key: "Akali",
	skins [
		{
			num: 0,
			id: 8400,
			name: "default"
		},
		...
	],
	tags: ["Assasin"],
	partype: "Energy",
	info: {
		difficulty: 7,
		attack: 5,
		defence: 3,
		magic: 8
	},
	stats: {
		armorperlevel: 3.5,
		attackdamage: 58.376,
		mpperlevel: 0,
		attackspeedoffset: -0.1,
		mp: 200,
		armor: 26.38,
		hp: 587.8,
		hpregenperlevel: 0.65,
		attackspeedperlevel: 3.1,
		attackrange: 125,
		movespeed: 350,
		attackdamageperlevel: 3.2,
		mpregenperlevel: 0,
		critperlevel: 0,
		spellblockperlevel: 1.25,
		crit: 0,
		mpregen: 50,
		spellblock: 32.1,
		hpregen: 8.342,
		hpperlevel: 85
	}
}
```


### Images

#### POST /assets/images/champions/

#### GET /assets/images/champions/square/:championName/

#### GET /assets/images/champions/loading/:championName/:skinId/

#### GET /assets/images/champions/splash/:championName/
Returns the specified image ^
#### GET /assets/images/champions/
Gets a list of all images available.


### Spells

#### POST /spells/


## Client

### Build for production

To compile the relavent files for production, run the following command

```
npm run build
```

### Run dev server

The client portion of this project uses the webpack dev server for development

```
npm run start:client
```

## Server

### Initiating the database

Make sure you have a postgres database set up named `lol`. Then run

```
npm run init:db
```

### Run server

After the database has been initialized, run the following to start the server

```
npm run start:server
```

** Make sure the correct database is running


## Development Shortcut

The shortcut for running the server and client simultaneously is

```
npm run dev

```



