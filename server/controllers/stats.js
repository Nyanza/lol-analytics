const Stats = require('../models').stats;
const S = require('sequelize');
module.exports = {
  create(req, res) {
    return Stats
      .create({
        champion: req.body.champion,
        role: req.body.role,
        winPercent: req.body.winPercent,
        playPercent: req.body.playPercent,
        banRate: req.body.banRate,
        championId: req.body.championId,
        league: req.body.league,
      })
      .then(champ => res.status(201).send(champ))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Stats
      .findOne({
        where: {champion: req.params.championName, league: req.params.league}
      })
      .then(stats => {
        if (!stats) {
          return res.status(404).send({
            message: 'Stats not Found',
          });
        }
        return res.status(200).send(stats);
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Stats
      .all()
      .then(stats => res.status(200).send(stats))
      .catch(error => res.status(400).send(error));
  }
};
