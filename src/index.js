const express = require("express")
const morgan = require("morgan")
const handlebars = require('express-handlebars')
const path = require('path')
const { query } = require("express")

const app = express()
const port = 3000;

app.use(express.urlencoded({extended:true}))// dùng để parse trong form post request

app.use(express.json()) // dùng để parse json với phương thức post trong XMLHtttpRequest, fetch, axios,...


//truy cập vào file trong thư mục img và tmp
// app.use(express.static(path.join(__dirname,'public','img')));
// app.use(express.static(path.join(__dirname,'public','tmp')));
app.use(express.static(path.join(__dirname,'public')));


// hiển thị log ra console : combine, commom, short, dev, tiny.
app.use (morgan("dev"));
// tùy chỉnh morgan
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
//app.use(morgan('status code:  :status'))



//Kiểm tra khi truy cập vào server, đủ điều kiện sẽ qua bước tiếp theo
app.use((req,res,next)=>{
    // if(req.params.xx == ok ) 
    // {
    //     next()
    // }
    next();
})


//handlebars 
app.engine('hbs',handlebars({extname:'.hbs'}))
app.set('view engine','hbs')



// Kiểm tra khi đến đường dẫn này thì cần đủ điều kiện mới pass
app.use ('/trangchu',(req,res,next)=>{
    //console.log('request: ', req);
    //console.log('reponse: ', res);
    next();
})
app.set('views',path.join(__dirname,'sources','views'))

app.get('/sass',(req,res)=>{
res.render('testsass',{title:'test node-SASS'})
})


app.get("/hbs",(req, res)=> 
{
    return res.render('testhbs',{'title':"ok",'mess':'this is a message','showList':true,
    'users':[{'name':'','age':''},{'name':'','age':''},{'name':'','age':''}],

})
}
);

app.get('/',(req,res)=>{
    res.render('home')

})

app.get("/tintuc",(req,res)=>{
    res.render('new',{layout:'testLayout','title':" thay đổi layout"})

})

app.get('/testbootstrap4',(req,res)=>{
    res.render('testbootstrap4',{title:'BootStrap 4'});
})


// fix Lỗi get favicon.ico express
app.get('/favicon.ico',(req, res,next)=>{
  res.sendStatus(204) // no content

})

app.get('/search',(req,res)=>{
    
    res.render('search',{title:'search query parameter',result: JSON.stringify(req.query)})
})
app.post('/search',(req,res)=>{
    res.render('search',{title:'search query parameter',content: JSON.stringify(req.body)})

    
})
// tạo khai báo khi truy cập vào đường dẫn
app.get("/trangchu",(req, res)=> res.send("Hello world"));// tạo khai báo khi truy cập vào đường dẫn,
// nếu không khai báo thì khi truy cập vào sẽ lỗi " Can not get /exxxx"
app.listen(port,()=> console.log(`example app listen att localhost:${port}`)); // lắng nghe khi truy cập vào port

 