const championsController = require('../controllers').champions;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'EYYY u made it to da api',
  }));
  app.post('/api/champions/', championsController.create);
  app.get('/api/champions/:championName', championsController.retrieve);
};
