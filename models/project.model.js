var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    type: {
        type: String
    },
    project: {
        title: String,
        description: String,
        myRole: String
    }
});

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;