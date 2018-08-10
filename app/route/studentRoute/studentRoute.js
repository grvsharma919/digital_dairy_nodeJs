var express = require('express');
var studentCtrl = require('../../controller/studentController/studentController.js');
var router = express.Router();

router.get('/sendParameter',studentCtrl.sendParameter);

router.post('/createStudent',studentCtrl.createStudent);
router.get('/getStudent',studentCtrl.getStudent);
router.post('/getStudentById',studentCtrl.getStudentById);
router.post('/updateStudent',studentCtrl.updateStudent);
router.post('/deleteStudent',studentCtrl.deleteStudent);
router.get('/sendParameter/:id',studentCtrl.sendParameter);


module.exports=router;


