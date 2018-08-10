var mongoose =require('mongoose');
var constant = require('./constant');


function connectDB() {
	//console.log('db url:',constant.DBURL);
	mongoose.connect('mongodb://localhost:27017/digital_dairy',function (err,data) {
	//mongoose.connect('mongodb://myUserAdmin:abc123@localhost:27017/digital_dairy',function (err,data) {
		//console.log(err,data);
		console.log('connection success');
	});
}


var obj = {
	connectDB : connectDB
}

module.exports = obj;