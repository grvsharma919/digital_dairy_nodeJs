var studentSchema = require('../../models/studentSchema');
var constant = require('../../config/constant');

var createStudent = function(req,res){

	let name = req.body.name;
	let fatherName = req.body.fatherName;
	let email= req.body.email;
	let phoneNo= req.body.phoneNo;
	let classs= req.body.class;
	let section= req.body.section;
	let rollno= req.body.rollno;
	console.log(req.body);

	if(name && fatherName && email && phoneNo && classs &&section&&rollno){
		var studentModel = {
			name : name,
			fatherName : fatherName,
			email : email,
			phoneNo : phoneNo,
			class : classs,
			section : section,
			rollno : rollno

		};
		console.log("data::",studentModel);
		studentSchema.create(studentModel,(err, data)=>{

			if(err) {

				return res.send({status : 400, message :constant.errMessage(err)});
				//return res.send({status : 400, message :"Error occured!",Error : constant.errMessage(err)});
			}
			return res.send({status : 200, message :"Succesful created",data : data});
		});


	}else{
		return res.send({status : 400, message :"Please fill all required field"});	
	}
	console.log("createStudent");
}


var getStudent = function(req,res){
	studentSchema.find({},{},function(err, data){
			if(err) return res.send({status : 400, message :"Error in getting students!",Error :err});

		return res.send({status : 200, message :"Get students", data : data});	
	});
}

var getStudentById = function(req,res){
	// findOne function will give only one document
	if(req.body._id){
				studentSchema.find({_id : req.body._id},{name : 1,email :1},function(err, data){
				console.log(err);
					if(err) return res.send({status : 400, message :"Error student by id!",Error :err});

				return res.send({status : 200, message :"Get student by id", data : data});	
			        });
			}else{
			       return res.send({status : 400, message :"something went wrong"});
			}
	
}

var updateStudent = function(req,res){
        if(req.body._id){
             studentSchema.update({_id : req.body._id},{$set : {name : req.body.name}},function(err, data){
					if(err) return res.send({status : 400, message :"Error student by id!",Error :err});

		            return res.send({status : 200, message :"Update Succesful!.", data : data});	
	                 });
        }else{
	              return res.send({status : 400, message :"id is not there"});
              
        }	
}


var deleteStudent = function(req,res){
        if(req.body._id){
            studentSchema.remove({_id : req.body._id},function(err, data){
            	if(err)	return res.send({status : 400, message :"please fill id"});

		        return res.send({status : 200, message :"Delete Succesful!.", data : data});	
	           });
           
          }else{
	             return res.send({status : 400, message :"please fill id"});

          }
	
}


var sendParameter = function(req, res){
	//http://localhost:4000/student/sendParameter/12?name=gurav
	console.log(req.headers.name,req.headers.class);
	console.log(req.query.name);
	res.send({status : 200, query:req.query.name, parms: req.params.id,heder:[req.headers.name,req.headers.class]});
}
exports.sendParameter=sendParameter;

exports.createStudent = createStudent;
exports.getStudent = getStudent;
exports.getStudentById = getStudentById;
exports.updateStudent = updateStudent;
exports.deleteStudent = deleteStudent;