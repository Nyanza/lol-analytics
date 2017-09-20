const spellsController = require('../controllers').spells;
const router = require('express').Router();
router.post('/', imagesController.create);

module.exports = router;
