const Champion = require('../models').Champion;
const S = require('sequelize');
module.exports = {
  create(req, res) {
    return Champion
      .create({
        name: req.body.name,
        key: req.body.key,
        title: req.body.title,
        skins: req.body.skins,
        /*lore: req.body.lore,*/
        tags: req.body.tags,
        partype: req.body.partype,
        info: req.body.info,
        stats: req.body.stats,
        metrics: req.body.metrics,
        defaultMetrics: req.body.defaultMetrics,
        squareImg: req.body.squareImg
      })
      .then(champ => res.status(201).send(champ))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Champion
      .findOne({
        attributes: ['name', 'title', 'key', 'skins', 'info', 'metrics', 'squareImg'],
        where: {name: req.params.championName }
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
  },
  list(req, res) {
    return Champion
      .all({
        attributes: ['name', ['defaultMetrics', 'metrics']]
      })
      .then(champs => res.status(200).send(champs))
      .catch(error => res.status(400).send(error));
  }
};
