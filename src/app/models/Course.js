const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, default: '', maxlength: 255 },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// name : String
// age: { type: Number, min: 18, index: true },
// bio: { type: String, match: /[a-z]/ },
// date: { type: Date, default: Date.now },
// buff: Buffer
// const ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Course', Course);
