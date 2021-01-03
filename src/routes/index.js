const newsRouter = require('./news');
const siteRouter = require('./site');
const testRouter = require('./tests');

const route = (app) => {
    app.use('/test', testRouter);

    app.use('/news', newsRouter);

    // app.post('/search',(req,res)=>{
    //     res.render('search',{title:'search query parameter',content: JSON.stringify(req.body)})

    // })

    // fix Lỗi get favicon.ico express

    app.use('/', siteRouter);
};

module.exports = route;
