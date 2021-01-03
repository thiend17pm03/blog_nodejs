const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');

router.use('/search', siteController.search);
router.use('/favicon.ico', siteController.fixFavicon);
router.use('/:keyword', siteController.notFound);
router.use('/', siteController.index);

module.exports = router;
