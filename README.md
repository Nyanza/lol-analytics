# LOL-ANALYTICS

#### Run app

If you've already set up the database, simply run ```npm run start:dev```
to start both the server and client concurrently

## Set up server

From the ```lol-api``` directory, run

```
npm run install
```

Create a postgres database named ```lol``` on your machine. To populate it, run

```
sequelize db:migrate
```

followed by

```
python initdb.py
```

you may have to run ```pip install requests```

Yay everything is set up now! To start the server, run

```
 npm run start:server 
```

## Start client

From the ```lol-api``` directory, run

```
npm run start:client
```

navigate to http://localhost:8080/

## Build

To build the client for production, run 

```
npm run build
```