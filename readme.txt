mã code http protocol:
    + 1xx : mã mang thông tin
    + 200 : mã thành công
    + 3xx : mã chuyển hướng
    + 4xx : Lỗi phía client
    + 5xx : Lỗi phía server

()=> {return console.log("tesst")} === ()=> console.log("tesst")

//Strict mode : 'use strict'; (chế độ nghiêm khắc) giúp báo các lỗi mà chế độ normal-mode bỏ qua:
    + số bát phân thì phía trước là 0 (strict mode sẽ báo lỗi) hoặc 0o: 0o10===8

// get : Show thông tin. req.query
// post: ẩn thông tin. req.body , express.urlencoded ({extended:true}) hoặc express.json
// JSON.stringify() : chuyển sang string

// npm 
    +  i : install
    + -g : global. thư viện sẽ cày vào máy tính chứ k cài riêng vào Project
    + --save : tạo khai báo trong dependencies, các bản npm cao không cần việc này
    + --save-dev : tạo khai báo trong DevDependencies, chỉ chạy trong môi trường dev
    


package.json : dependencies quản lý các thư viện mà Project cần có
package-lock.json : quản lý các thư viện mà các thư viện trong Project cần phụ thuộc

server side rendering :
    + Tốt cho việc seo, view page source sẽ thấy các thẻ html được hiển thị
    + Load lần đầu lun nhanh hơn
    + Mỗi lần thay đổi, chuyển thao tác thì phải load lại
client side rendering (reacjs) : 
    + Không tốt cho seo, view page source sẽ không thấy được các thẻ html được render tại client
    + Load lần đầu sẽ chậm hơn, nhưng các lần sau sẽ không cần load lại toàn bộ.

// Tạo Project
    + npm innit 
    + npm install express



// Express 
    + Express hỗ trợ việc phát triển ứng dụng theo mô hình MVC, mô hình phổ biến cho việc lập trình web hiện nay.
    + Cho phép định nghĩa Middleware hỗ trợ cho việc tổ chức và tái sử dụng code.
    + Định nghĩa routes và các request method đến server một cách dễ dàng.
    + Hỗ trợ REST API
    + express.static : hỗ trợ truy cập vào file bằng url
// NodeMon 
    + npm i nodemon --save-dev
    + Thay vì sử dụng node index.js để server nhận code mới thì Nodemon sẽ tự động làm cho mình
    + thêm vào scripts trong package.json "start" : "nodemon --inspect index.js",
    + Cấu hình nodemon : tạo file nodemon.json tại thư mục gốc { 'ext':'js mjs scss'}
// Morgan 
    + npm i morgan --save-dev
    + middleware morgan dùng để request logger. Nó cho bạn biết một số điều khi máy chủ của bạn nhận được yêu cầu. Và cho chúng ta nhiều thông tin hơn về client chẳng hạn như: 
        - Date, HTTP version, Method, Referrer, Remote,
        - Address, Remote, User, Request header,
        - Response headers, Response time, Status code ,Url of the request,
        - User Agent
    + morgan đi kèm với 5 format được xác định trước để lựa chọn như:
        - combined : hầu như đầy đủ
        - common : thiếu 1 ít
        - short : thiếu 1 ít ít
        - dev : ngắn gọn
        - tiny : tựa tựa dev 
    + Ngoài ra chúng ta cũng có thể tùy chình:
        - morgan(':method :url :status :res[content-length] - :response-time ms')


// middleware camelcase-keys nhiệm vụ của middleware này là convert tất cả các thuộc tính trên form trước khi xống backend để get value. 
    + ví dụ trong form ta có input = first-name hoặc First-name thì dưới backend chúng ta có thể convert thành FirstName


// middleware omit-empty :  nó chỉ lấy giá trị có tồn tại và đồng thời có giá trị (!undefined)
    + ví dụ như trong request thông tin không logic

// view engine là công cụ giúp chúng ta viết code html 1 cách ngắn gọn hơn, đồng thời nó có thể sử dụng lại
Ngoài ra nó có thể đưa dữ liệu từ phía server và render ra đoạn html cuối cùng(có 3 loại thường dùng) :
    + ejs
    + pug (con chó): viết html tựa như python sử dụng indent và khoảng trắng. Không cần quan tâm đến thẻ đóng và mở
    + handlebars : trình biên dịch nhận bất kỳ biểu thức HTML và biên dịch chúng thành hàm JavaScript, Hàm JavaScript này nhận một tham số, một đối tượng, dữ liệu của bạn, và nó trả về một chuỗi có các giá trị HTML và thuộc tính của đối tượng được chèn vào HTML.
        - Có các Built-in Helper như : if, else, each, with , unless, isdefined , lookup, log,...
        - res.render('new',{layout:'testLayout','title':" thay đổi layout"})
        - cần có các thư mục như: views, layouts, partials, 
        - có thể thay đổi đuôi file : extname : '.ahihi' 
    

//CSS Preprocessor là ngôn ngữ tiền xử lý css, nó là công cụ giúp viết css gần giống với ngôn ngữ lập trình rồi compile thành css thuần
    Có rất nhiều css preprocessor như sass,less, stylus,...

// scss : 
    + _filename.scss : chia ra các file nhỏ,để import và file scss :  import 'filename'
    + Biến : dùng dấu $ như trong php 
        - khai báo $red-cl:red;
        - sử dụng color:$red-cl;
    + Hàm : hàm có thể có tham số hoặc không tham số thì không dùng ngoặc ()
        - khai báo @mixin hamtest($color,$fsize){ color: $color; font-size: $fsize;}
        - sử dụng @include hamtest(red,40px)
    + Kế thừa (extend) :
        - ví dụ class có sẵn là .text-hihi
        - khi kế thừa  @extend .text-hihi
    + Quy tắc xếp chồng 
        - thay vì sử dụng .main p { color:red}
        - thì ta có thể chồng như sau .main { p{color:red}}
    + Inner : thay vì viết 2 css .main và main-box thì ta có thể viết .main { &-box{ }}

// sass giúp compile thành css thuần từ scss hoặc pug(cú pháp dùng indent tựa python)

//Javascript là 1 trong những tài nguyên chặn trang, có nghĩa là việc hiển thị HTML có thể bị chặn hay làm chậm bởi Javascript.\
    Khi parser đọc đến <script> tag, bất kể là inline hay là external file, quá trình parse sẽ tạm dừng để fetch script đó về và execute.
    Việc này có thể là vấn đề nếu chúng ta load nhiều file Javascript trên trang, làm tăng thời gian load trang mặc dù có thể việc hiển thị html ở trang không thực sự phụ thuộc vào những file javascript đó.
    Và may mắn thay, thẻ <script> có 2 thuộc tính, đó là async và defer, cho phép chúng ta kiểm soát và load những file này theo ý muốn, tránh chặn quá trình load trang:
    + Quá trình thông thường : html parse -> html parse pause -> Script download -> Script execute -> html parse continue.
    + async <script async src="script.js">  : khi gặp thẻ script có thuộc tính này thì nó sẽ vẫn parse html cho đến khi thẻ này được load xong
              Sau đó mới dừng parse html và execute code script này xong mới tiếp tục parse html
    + defer (<script defer src="script.js"> ): khi gặp thuộc tính này thì quá trình parse sẽ không bị tạm dừng
    mà prase đến khi hoàn thành, quá trình download script song song và cuối thì thì execute khi html đã parse xong
    + Quy tắc: 
        + Nếu script đó là module tách biệt thì dùng async cho load và execute tới trang luôn.
        + Nếu script đó có phụ thuộc và script khác thì dùng defer để quá trình load và execute diễn ra theo thứ tự.
        + Nếu script nhỏ và các script phụ thuộc vào nó thì cho nó load inline và không cần dùng async hay defer.


// query parameter: dùng để lấy thông tin trên url 
    + lấy : req.query
    + query parameter được đặt sau dấu ? trên url : x.com?q=1
    + các query parameter cách nhau bởi dấu & : x.com?q=1&z=2
    + trong form mặc định có thẻ input thì khi nhấn submit nó sẽ chuyển các name trong thẻ input lên phần parameter trong url
        - <form><input type="text" name='q' />
            <button type="submit" class="btn btn-primary">Submit</button>
            </form> thì khi nhấn submit url sẽ có dạng ?q=xx
        

//  prettier code formatter :
        "scripts": : {
            "beautiful" : "prettier --single-quote --trailing-comma all --tab-width 4 --write src/**/*.{js,json,scss}",
        }
        - singleQuote : đổi dấu nháy kép thành dấu nháy đơn với chuỗi, nếu chuỗi có cả nháy đơn và nháy kép thì không bị thay đổi
        - tabWidth 4 : khoảng cách tab là 4 space
        - trailingComma-all : truy xuất tất cả các file 
        - write : quyền ghi đè file

// lint-staged : nó sẽ chạy lệnh trong những file mà sau khi chúng ta gõ lệnh git add        
          "lint-staged": {
                 "src/**/*.{js,json,scss}": "prettier --single-quote --trailing-comma all --tab-width 4 --write"
            },

// husky : dùng dễ hỗ trợ git hook dễ hơn (hook: 'móc' xử lý các action ),
        khi chạy lệnh git commit -m "xxx" thì nó sẽ xử lý gọi đến thành lint-staged rồi mới commit
         "husky": {
            "hooks": {
            "pre-commit": "lint-staged",
            "pre-push": "npm test",
            "...": "..."
                }
            }
