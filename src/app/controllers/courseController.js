const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {
    // index(req, res) {
    //     res.render('course', { title: 'Khóa học' });
    // }
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                // res.json(course);
                res.render('courses/show', {
                    title: '',
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    home(req, res, next) {
        res.render('courses/home', { title: 'Khóa học' });
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    title: 'Cập nhật khóa học',
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(res.redirect('/me/stored/courses'))
            .catch(next);
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(res.redirect('/me/trash/courses'))
            .catch(next);
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => {});
    }

    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
    forcedestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}
module.exports = new CourseController(); // new NewsController ~~ new NewsController()
