const championsController = require('../controllers').champions;
const router = require('express').Router();

router.post('/', championsController.create);
router.get('/:championName', championsController.retrieve);
router.get('/', championsController.list);

module.exports = router;
