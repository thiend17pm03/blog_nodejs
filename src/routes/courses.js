const express = require('express');
const courseController = require('../app/controllers/courseController');
const router = express.Router();

//[GET] /course/create
router.get('/create', courseController.create);

//[POST] /course/store
router.post('/store', courseController.store);

//[GET] /course/:id/edit
router.get('/:id/edit', courseController.edit); // có thể thay :id/edit thành :a hoặc :b ....

//[PUT] /courses/:id
router.put('/:id', courseController.update);

//[pacth] /courses/:id
router.patch('/:id/restore', courseController.restore);

//[DELETE] /courses/:id/force
router.delete('/:id/force', courseController.forcedestroy);

//[DELETE] /courses/:id
router.delete('/:id', courseController.destroy);

//[GET] /course/:slug
router.get('/:slug', courseController.show); // có thể thay :slug thành :a hoặc :b ....

// / luôn để sau cùng vì nó check đường đi theo thứ tự
router.get('/', courseController.home);

module.exports = router;
