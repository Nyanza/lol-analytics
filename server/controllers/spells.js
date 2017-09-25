const Spells = require('../models').Spells;

module.exports = {
  create(req, res) {
    return Spells
      .create({
        name: req.body.name,
        description: req.body.description,
        img: req.body.image,
        key: req.body.key,
        costType: req.body.costType,
        costBurn: req.body.costBurn,
        championId: req.body.championId
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },
};
