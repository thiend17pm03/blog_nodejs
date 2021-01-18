// function siteController (){

//    this.index =  function ( req,res){
//         res.render('home',{title:'Trang Chủ'});
//     }
// }
// module.exports = new siteController

// có thể sử dụng function Object thay cho clas như trên

const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        // res.render('home', { title: 'Trang Chủ' });
        // viết theo callback
        // Course.find({}, function (err, courese) {
        //     if (!err) {
        //         res.json(courese);
        //     } else {
        //         res.json({ message: 'ERR !!' });
        //     }
        // });

        // Viết theo promises
        Course.find({})
            .then((courses) =>
                res.render('home', {
                    title: 'Trang chủ',
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next); // ~~ (err => next(err)) chuyển qua next để tập trung lỗi để xử lý ở phần khác
    }
    search(req, res) {
        res.render('search', {
            title: 'search query parameter',
            content: JSON.stringify(req.body),
        });
    }
    fixFavicon(req, res) {
        res.sendStatus(204); // no content
    }
    notFound(req, res) {
        res.render('notfound', {
            title: 'Không tìm thấy trang',
            keyword: req.params.keyword,
        });
    }
}

module.exports = new SiteController();
