//var prompt = require('prompt');
var student = require('./student.js');

var Bus = function(studentOnTheBus,driverName,color,gas){
	this.studentOnTheBus = [];	
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
  this.studentEntersBus = function(name,gender,grade,gpa,detention,sleepingInClass,catchPhrase){
		this.studentOnTheBus.push(new student(name,gender,grade,gpa,detention,sleepingInClass,catchPhrase));
        console.log(Bus.studentOnTheBus);
    
    };
    this.busChatter = function(){
    	for (var i = 0;i<this.studentOnTheBus.length; i++){
    		console.log(this.studentOnTheBus[i] + this.catchPhrase );
    	}

    }
	//console.log(Bus.studentOnTheBus[i]);
};



module.exports = Bus;


