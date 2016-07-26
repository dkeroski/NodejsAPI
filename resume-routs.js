var _ = require('lodash');
var Resume = require('./resume.model.js');

module.exports = function(app) {

    // post new resume OK
    app.post('/resumes', function(req, res) {
        var newResume = new Resume(req.body);
        newResume.save(function(err) {
            if (err)
                res.json({
                    info: 'Error durring saving',
                    error: err
                })
        })
        res.json({
            info: "Resume created successfully"
        })
    });

    //get all resumes OK
    app.get('/resumes', function(req, res) {
        Resume.find(function(err, resumes) {
            if (err)
                res.json({
                    info: 'Error durring saving',
                    error: err
                })
            res.json({
                info: 'Resumes recived successfully',
                data: resumes
            })
        })
    })


    //get specific resume OK
    app.get('/resumes/:id', function(req, res) {
        Resume.findById(req.params.id, function(err, resume) {
            if (err)
                res.json({
                    info: 'Error durring saving',
                    error: err
                })
            if (resume) {
                res.json({
                    info: 'Resume found successfully',
                    data: resume
                })
            } else {
                res.json({
                    info:'resume not found'
                })
            }
        })
    });
  

    app.put('/resumes/:id', function(req, res) {
        Resume.findById(req.params.id, function(err, resume) {
            if (err) {
                res.json({
                    info: 'Resume not found',
                    error: err
                });
            }
            if (resume) {
                resume.firstName = req.body.firstName;
                resume.lastName = req.body.lastName;
                // _.merge(resume, req.body);
                resume.save(function(err) {
                    if (err) {
                        res.json({
                            info: 'Error durring saving',
                            error: err
                        })
                    }
                    res.json({
                        data: req.resume,
                        info: 'Resume updated successfully'
                    })
                });
            } else {
                res.json({
                    info: 'Resume not found'
                })
            }
        })
    });

    app.patch('/resumes/:id',function(req,res){
        if(req/body._id)
        delete req.body._id;
        for(var prop in req.body) {
           req.body[p]=req.body[p]; 
        }
        req.book.save(function(err){
            if(err){
                res.status(500).send(err);
            }else{
                res.json(req.resume);
            }
        });
    })
    // app.delete('/resume/:id', function(req, res) {
    //     Resume.findByIdAndRemove(req.params.id, function(err, res) {
    //         if (err) {
    //             res.json({
    //                 info: "Resume can not foind successfully",
    //                 erorr: err
    //             });
    //         }
    //         res.json({
    //             info: "Resume deleted successfully"
    //         });
    //     });
    // });


}
