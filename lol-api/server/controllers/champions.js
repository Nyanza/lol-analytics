const Champion = require('../models').Champion;
const S = require('sequelize');
module.exports = {
  create(req, res) {

    return Champion
      .create({
        name: req.body.name,
        img: req.body.image,
        key: req.body.key,
        title: req.body.title,
        skins: req.body.skins,
        /*lore: req.body.lore, */
        allytips: req.body.allytips,
        enemytips: req.body.enemytips,
        tags: req.body.tags,
        partype: req.body.partype,
        info: req.body.info,
        stats: req.body.stats,
        spells: req.body.spells
      })
      .then(champ => res.status(201).send(champ))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Champion
      .findAll({
        attributes: ['name', [S.json("img.full"), "img"], 'title', 'key', 'skins', 'allytips', 'enemytips', 'tags', 'partype', 'info', 'stats', 'spells'],
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
        attributes: ['name', [S.json("img.sprite"), "img"]]
      })
      .then(champs => res.status(200).send(champs))
      .catch(error => res.status(400).send(error));
  }
};
