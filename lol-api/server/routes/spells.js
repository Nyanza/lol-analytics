const spellsController = require('../controllers').spells;
const router = require('express').Router();
router.post('/', spellsController.create);

module.exports = router;
