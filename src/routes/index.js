const router = require('express').Router();
const usersRoutes = require('./users');
const newsRoutes = require('./news');

router.use('/users', usersRoutes);
router.use('/news', newsRoutes);

module.exports = router;