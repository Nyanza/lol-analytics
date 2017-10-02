const spellsController = require('../controllers').spells;
const router = require('express').Router();

router.post('/', spellsController.create);

router.get('/:championId', spellsController.retrieve);

module.exports = router;
