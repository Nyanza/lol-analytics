const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// All access from localhost for dev
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const ChampionsRouter = require('./routes/champions.js');
const ImagesRouter = require('./routes/images.js');
const SpellsRouter = require('./routes/spells.js');

app.use('/api/v1/champions', ChampionsRouter);
app.use('/api/v1/assets/images/champions', ImagesRouter);
app.use('/api/v1/spells', SpellsRouter);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log("Express server listening on port " + port);
});
