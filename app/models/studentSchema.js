var mongoose = require('mongoose');
var Schema = mongoose.Schema;

studentSchema = new Schema({        
     name : {type : String ,required: true},
     fatherName : {type : String ,required: true},
     email : {type : String ,required: true ,unique : true},
     phoneNo : {type : Number ,required: true,unique : true},
     class : {type : String ,required: true},
     section : {type : String ,required: true},
     rollno : {type : Number ,required: true ,unique : true},
	 createdAt: { type : Date, default : Date.now}
}) 

var student = mongoose.model('student',studentSchema);
module.exports = student;