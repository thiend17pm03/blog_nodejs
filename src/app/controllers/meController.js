const Course = require('../models/Course');
const {
    mongooseToObject,
    mutipleMongooseToObject,
} = require('../../util/mongoose');
class MeController {
    // index(req, res) {
    //     res.render('course', { title: 'Khóa học' });
    // }

    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        // sẽ chạy xong 2 cái này rồi mới đến then or catch. xử lý bất đồng bộ
        // then : trả về mảng là các then của các promise trong mảng truyền vào
        // thay vì viết (arr) => { arr[0], ...} thì có thể viết theo cách dưới
        // gọi là destructuring ES6
        // catch: tương tự
        // const promise = [new Promise(Course.find({})),
        //     new Promise(Course.countDocumentsDeleted())]
        // bug trên chrome v8
        // Promise.all([Course.find({}),Course.countDocumentsDeleted()])
        //     .then(([courses,deleteCount]) => {
        //         res.render('me/stored-courses',{title: 'Khóa học của tôi',deleteCount, courses : mutipleMongooseToObject(courses)
        //          })
        //     })
        //     .cacth(next)
        Course.find({})
            .then((courses) =>
                Promise.all([courses, Course.countDocumentsDeleted()]),
            )
            .then(([courses, deleteCount]) => {
                res.render('me/stored-courses', {
                    title: 'Khóa học của tôi',
                    deleteCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trash-courses', {
                    title: 'Thùng rác',
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch((err) => next);
    }

    // [GET] /me
    home(req, res, next) {
        res.render('notFound', { title: 'Khóa học' });
    }
}
module.exports = new MeController(); // new NewsController ~~ new NewsController()
