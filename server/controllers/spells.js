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
    .then(spells => res.status(201).send(spell))
    .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Spells
    .findAll({
      attributes: ['name', 'img', 'description'],
      where: {championId: req.params.championId }
    })
    .then(spell => {
      if (!spell) {
        return res.status(404).send({
          message: 'Spell not Found',
        });
      }
      return res.status(200).send(spell);
    })
    .catch(error => {
      console.log(error)
      res.status(400).send(error)
    });
  }
};
