var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ResumeSchema = new Schema({
    firstName: String,
    lastName: String,
    created_at: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Resume', ResumeSchema)
