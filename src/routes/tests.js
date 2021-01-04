const express = require('express');
const router = express.Router();

const testController = require('../app/controllers/testController');

router.get('/sass', testController.testsass);
router.get('/hbs', testController.testhbs);
router.get('/layout', testController.testlayout);
router.get('/bootstrap4', testController.testbootstrap4);
router.get('/:keytest', testController.notfound);
router.get('/', testController.index);

module.exports = router;
