const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/siteController');

router.get('/search', siteController.search);
router.get('/favicon.ico', siteController.fixFavicon);
router.get('/:keyword', siteController.notFound);
router.get('/', siteController.index);

module.exports = router;
