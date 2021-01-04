// function siteController (){

//    this.index =  function ( req,res){
//         res.render('home',{title:'Trang Chủ'});
//     }
// }
// module.exports = new siteController

// có thể sử dụng function Object thay cho clas như trên

const Course = require('../models/Course');

class SiteController {
    index(req, res) {
        res.render('home', { title: 'Trang Chủ' });
        Course.find({}, function (err, courese) {
            if (!err) {
                res.json(courese);
            } else {
                res.json({ message: 'ERR !!' });
            }
        });
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
