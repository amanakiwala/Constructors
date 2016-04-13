var student = require('./student.js');
var bus = require('./bus.js');
var prompt = require('prompt');

var added = new student();

prompt.start();
  
  prompt.get(['name', 'gender', 'grade', 'gpa', 'detention', 'sleepingInClass', 'catchPhrase'], function(err, result) {
   var studentEntersBus = new student(result.name, result.gender, result.grade, result.gpa, result.detention, result.sleepingInClass, result.catchPhrase)
  
 
   
  studentEntersBus.canStudentHaveFun();
  
});