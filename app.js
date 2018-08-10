	var express = require ('express');
	var bodyparser = require('body-parser');
	const fs = require('fs');
	var app = express();
	var http = require("http");
	var https = require("https");
	
	//Require Routes	
	var db=require('./app/config/dbconnection');
	var studentRoute = require('./app/route/studentRoute/studentRoute.js');
    var PORT = 4000;
    // app.set('port',PORT);

	app.use(bodyparser.json()); 
	// app.listen(PORT,(err, data)=>{
	//     console.log(`Server running on ${PORT}`);
	//     db.connectDB();		
	// });  
	var server = http.createServer(app);
	server.listen(PORT);
	// console.log("Erorr is server:::",server);
	server.on('error',function onError(err){
		console.log("Erorr is :::",err);
	});
	server.on('listening',function onListen(){
		console.log("onListen is :::");
	});


    app.get('/',(req,res)=>{
    	return res.send({status:200,message:"app has deployed"});
    });

    
	app.use('/student',studentRoute);