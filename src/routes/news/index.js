const router = require('express').Router();
const newController = require('../../controllers/news');
const { verifyToken } = require('../../utils/middlewares/verifyAuthToken');

router.get('/', verifyToken,  newController.getTopNews);

module.exports = router;