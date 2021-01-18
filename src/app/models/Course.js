const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, default: '', required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    { timestamps: true },
);
// requierd : true // cái này là check (vadidate) ở tầng model
// từ ver 4 trở đi thì có hỗ trợ timestamps thay cho :
//  createdAt: { type: Date, default: Date.now },
//  updatedAt: { type: Date, default: Date.now },
// unique : có hỗ trợ thư viên shortID khi gặp slug có rồi thì nó dùng shortId để thêm 1 chuối phía sau
// tránh trùng nhau
// truyền vào đối số thứ 2 còn nếu ghi createAt,UpdateAt thì truyền vào 1 như bình thường

// name : String
// age: { type: Number, min: 18, index: true , maxlength:1000 },
// bio: { type: String, match: /[a-z]/ },
// date: { type: Date, default: Date.now },
// buff: Buffer
// const ObjectId = Schema.ObjectId;

Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });

module.exports = mongoose.model('Course', Course);
