const express = require('express');
const meController = require('../app/controllers/meController');
const router = express.Router();

//[GET] /me/stored/courses
router.get('/stored/courses', meController.storedCourses);

//[GET] /me/trash/courses
router.get('/trash/courses', meController.trashCourses);

// / luôn để sau cùng vì nó check đường đi theo thứ tự
router.get('/', meController.home);

module.exports = router;
