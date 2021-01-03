class NewsController {
    index(req, res) {
        res.render('news', { title: 'Tin tức' });
    }
    show(req, res) {
        res.render('Shownews', { title: 'Show news', params: req.params.slug });
    }
}
module.exports = new NewsController(); // new NewsController ~~ new NewsController()
