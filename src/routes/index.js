const newsRouter = require('./news');
const siteRouter = require('./site');
const testRouter = require('./tests');
const meRouter = require('./me');
const coursesRouter = require('./courses');

const route = (app) => {
    app.use('/test', testRouter);

    app.use('/news', newsRouter);

    // app.post('/search',(req,res)=>{
    //     res.render('search',{title:'search query parameter',content: JSON.stringify(req.body)})

    // })

    // fix Lỗi get favicon.ico express

    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', siteRouter); // '/' luôn để sau cùng
};

module.exports = route;
