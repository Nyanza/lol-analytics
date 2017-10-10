const statsController = require('../controllers').stats;
const router = require('express').Router();

router.post('/', statsController.create);
router.get('/:championName/:league', statsController.retrieve);
router.get('/', statsController.list);

module.exports = router;
