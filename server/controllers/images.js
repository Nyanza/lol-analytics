const Images = require('../models').Images;
const path = require("path");

const imagePath = __dirname + '/../../'

module.exports = {
  create(req, res) {
    return Images
      .create({
        champion: req.body.name,
        square: req.body.square,
        loading: req.body.loading,
        splash: req.body.splash,
        championId: req.body.championId,
      })
      .then(champ => res.status(201).send(champ))
      .catch(error => res.status(400).send(error));
  },
  retrieveSquare(req, res) {
    return Images
      .findOne({
        attributes: ['square'],
        where: {champion: req.params.championName },
        raw: true
      })
      .then(champion => {
        if (!champion) {
          return res.status(404).send({
            message: 'Images not Found',
          });
        }
        return res.status(200).send(champion);
      })
      .catch(error => res.status(400).send(error));
  },
  retrieveLoading(req, res) {
    return Images
      .findOne({
        attributes: ["loading"],
        where: {champion: req.params.championName },
        raw: true
      })
      .then(champion => {
        const url = path.join(imagePath, champion["loading"][parseInt(req.params.skinId)]);
        if (!champion) {
          return res.status(404).send({
            message: 'Images not Found',
          });
        }
        return res.status(200).sendFile(url);
      })
      .catch(error => res.status(400).send(error));
  },
  retrieveSplash(req, res) {
    return Images
      .findOne({
        attributes: [S.json("splash"+req.params.skinId)],
        where: {champion: req.params.championName },
        raw: true
      })
      .then(champion => {
        if (!champion) {
          return res.status(404).send({
            message: 'Images not Found',
          });
        }
        return res.status(200).send(champion);
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Images
      .all()
      .then(champs => res.status(200).send(champs))
      .catch(error => res.status(400).send(error));
  }
};
