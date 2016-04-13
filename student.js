

//var bus = require('./bus.js');


var Student = function(name,gender,grade,gpa,detention,sleepingInClass,catchPhrase){
	
		this.name= name;
		this.gender= gender;
		this.grade= grade;
		this.gpa= gpa;
		this.detention= detention;
		this.sleepingInClass= sleepingInClass;
		this.catchPhrase= catchPhrase;
		this.canStudentHaveFun= function(){
			if((this.detention < 10) && (this.gpa >2)){
				console.log("The student can have fun " + this.catchPhrase)
			}else{
				console.log("I can't have fun ");
			}
		};
	};


module.exports = Student;