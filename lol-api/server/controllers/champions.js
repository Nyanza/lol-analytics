const Champ = require('../models').Champs;

module.exports = {
  create(req, res) {
    return Champ
      .create({
        name: req.body.name,
        role: req.body.role,
        kills: req.body.kills,
        deaths: req.body.deaths
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Champ
      .findAll({
        where: { name: req.params.championName }
      })
      .then(champion => {
        if (!champion) {
          return res.status(404).send({
            message: 'Champion not Found',
          });
        }
        return res.status(200).send(champion);
      })
      .catch(error => res.status(400).send(error));
  }
};
