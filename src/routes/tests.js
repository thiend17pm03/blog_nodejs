const express = require('express');
const router = express.Router();

const testController = require('../app/controllers/testController');

router.use('/sass', testController.testsass);
router.use('/hbs', testController.testhbs);
router.use('/layout', testController.testlayout);
router.use('/bootstrap4', testController.testbootstrap4);
router.use('/:keytest', testController.notfound);
router.use('/', testController.index);

module.exports = router;
