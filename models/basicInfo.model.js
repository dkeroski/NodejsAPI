var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BasicInfoSchema = new Schema({
    type: {
        type: String
    },
    firstName: {
        type: String,
        default: 'dasdasds'
    },
    lastName: {
        type: String,
    },
    jobPosition: {
        type: String,
    }
});

var BasicInfo = mongoose.model('BasicInfo', BasicInfoSchema);
module.exports = BasicInfo;