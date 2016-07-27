var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skills = ['c#', 'javascript', 'java', '.net'];

var TechnicalSkillsSchema = new Schema({
    skills: {
        type: String,
        enum: skills
    }
})

var TechnicalSkills = mongoose.model('TechnicalSkills', TechnicalSkillsSchema);
module.exports = TechnicalSkills;