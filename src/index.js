const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const { query } = require('express');
const route = require('./routes/index');
const db = require('./config/db');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // dùng để parse trong form post request

app.use(express.json()); // dùng để parse json với phương thức post trong XMLHtttpRequest, fetch, axios,...

//truy cập vào file trong thư mục img và tmp
// app.use(express.static(path.join(__dirname,'public','img')));
// app.use(express.static(path.join(__dirname,'public','tmp')));
app.use(express.static(path.join(__dirname, 'public')));

// hiển thị log ra console : combine, commom, short, dev, tiny.
app.use(morgan('dev'));
// tùy chỉnh morgan
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
//app.use(morgan('status code:  :status'))

//Kiểm tra khi truy cập vào server, đủ điều kiện sẽ qua bước tiếp theo
app.use((req, res, next) => {
    // if(req.params.xx == ok )
    // {
    //     next()
    // }
    next();
});

//handlebars
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Kiểm tra khi đến đường dẫn này thì cần đủ điều kiện mới pass
app.use('/trangchu', (req, res, next) => {
    //console.log('request: ', req);
    //console.log('reponse: ', res);
    next();
});
app.set('views', path.join(__dirname, 'sources', 'views'));

//Routes
route(app);

app.listen(port, () => console.log(`App listen att localhost:${port}`)); // lắng nghe khi truy cập vào port

//Connect DB
db.connect();
