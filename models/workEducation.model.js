var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkEducationSchema = new Schema({
    organization: String,
    title: String,
    description: String,
    from: Date,
    to: Date
})

var WorkEducation = mongoose.model('WorkEducation', WorkEducationSchema);
module.exports = WorkEducation;