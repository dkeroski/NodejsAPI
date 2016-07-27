var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var languages = ['English', 'German', 'Deutch'];

var LanguagesSchema = new Schema({
    languages: {
        type: String,
        enum: Languages
    }
})

var Languages = mongoose.model('Languages', LanguagesSchema);
module.exports = Languages;