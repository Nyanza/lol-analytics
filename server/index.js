const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path')
const app = express();

const port = parseInt(process.env.PORT, 10) || 8000;
const server = http.createServer(app);

const ChampionsRouter = require('./routes/champions.js');
const ImagesRouter = require('./routes/images.js');
const SpellsRouter = require('./routes/spells.js');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// All access from localhost for dev
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use('/api/v1/champions', ChampionsRouter);
app.use('/api/v1/assets/images/champions', ImagesRouter);
app.use('/api/v1/spells', SpellsRouter);

app.use('/dist', express.static(path.join(__dirname, '/../dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/../index.html')) );



app.set('port', port);
server.listen(port, () => {
    console.log("Express server listening on port " + port);
});
