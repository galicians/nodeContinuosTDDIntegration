var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:{ type:String },
    description:{ type:String }
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function() {
    Job.find({}).exec(function(error, collection){
        if(collection.length === 0) {
            Job.create({title:'makerOne', description:'You wil be coding in ruby'});
            Job.create({title:'makerTwo', description:'You wil be coding in node.js'});
            Job.create({title:'makerThree', description:'You wil be coding in angular.js'});
            Job.create({title:'makerFour', description:'You wil be coding in vanilla javascript'});
        }
    })

}