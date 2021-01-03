const express = require('express');
const newsController = require('../app/controllers/newsController');
const router = express.Router();

router.use('/:slug', newsController.show); // có thể thay :slug thành :a hoặc :b ....

// / luôn để sau cùng vì nó check đường đi theo thứ tự
router.use('/', newsController.index);

module.exports = router;
