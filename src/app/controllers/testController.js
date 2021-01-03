class TestController {
    index(req, res) {
        res.render('hometest', { title: 'Test here' });
    }
    testsass(req, res) {
        res.render('testsass', { title: 'test node-SASS' });
    }
    testhbs(req, res) {
        res.render('testhbs', {
            title: 'ok',
            mess: 'this is a message',
            showList: true,
            users: [
                { name: '', age: '' },
                { name: '', age: '' },
                { name: '', age: '' },
            ],
        });
    }
    testlayout(req, res) {
        res.render('testLayout', {
            layout: 'testlayout',
            title: ' thay đổi layout',
        });
    }
    testbootstrap4(req, res) {
        res.render('testbootstrap4', { title: 'BootStrap 4' });
    }
    notfound(req, res) {
        res.render('notfound', {
            title: 'Không tìm thấy trang',
            keyword: req.params.keytest,
        });
    }
}

module.exports = new TestController();
