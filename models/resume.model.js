var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//sub documents schemas 
var basicInfo = require('./basicInfo.model');
var project = require('./project.model');
var baseWorkEducation = require('./workEducation.model');
var technicalSkill = require('./skill.model');
var language = require('./language.model')

//MAIN SCHEMA MODEL
var ResumeSchema = new Schema({
    //section basic information
    test: {
        type: String,
        default: 'test'
    },
    //firstname,lastname,jobposition
    basic: [basicInfo],
    //section for workexpirinece
    works: [{
        //base :organization,title,date,description
        base: [baseWorkEducation],
        //projects:title,description,myrole
        projects: [project]
    }],
    //section education // base :organization,title,date,description
    education: [baseWorkEducation],
    //section technical skills
    skills: [technicalSkill],
    //section languages
    languages: [language]
});

var Resume = mongoose.model('Resume', ResumeSchema);
module.exports = Resume;