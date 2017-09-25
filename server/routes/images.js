const imagesController = require('../controllers').images;
const router = require('express').Router();
router.post('/', imagesController.create);
router.get('/square/:championName', imagesController.retrieveSquare);
router.get('/loading/:championName/:skinId', imagesController.retrieveLoading);
router.get('/splash/:championName', imagesController.retrieveSplash);

router.get('/', imagesController.list);

module.exports = router;
