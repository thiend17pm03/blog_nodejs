const express = require("express")
const morgan = require("morgan")
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()
const port = 3000;


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

app.get("/",(req, res)=> 
{
    return res.render('home',{'title':"ok",'mess':'this is a message','showList':true,
    'users':[{'name':'','age':''},{'name':'','age':''},{'name':'','age':''}],

})
}
);

app.get("/tintuc",(req,res)=>{
    res.render('new',{layout:'testLayout','title':" thay đổi layout"})

})

// tạo khai báo khi truy cập vào đường dẫn
app.get("/trangchu",(req, res)=> res.send("Hello world"));// tạo khai báo khi truy cập vào đường dẫn,
// nếu không khai báo thì khi truy cập vào sẽ lỗi " Can not get /exxxx"
app.listen(port,()=> console.log(`example app listen att localhost:${port}`)); // lắng nghe khi truy cập vào port



