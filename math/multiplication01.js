(function(){
	'use strict';

	mainFunction();
	function mainFunction(){
		var obj = getCommandLineVariables();		
		console.log(obj.firstNum+" * "+obj.secondNum+" = "+mult(obj.firstNum,obj.secondNum));
	} // end of mainFunction

	function mult(firstNum,secondNum){
		return (secondNum > 1) ? firstNum + mult(firstNum,--secondNum) : firstNum;
	}// end of mult

	/*
		Capture the numbers passed as commandline arguments
	*/
	function getCommandLineVariables(){
		var arg_array = process.argv.slice(2),
			obj = {};

		if(arg_array.length !== 2){
			throw new Error("Pass two number as commandline arguments");
		}

		obj.firstNum = parseInt(arg_array[0]);
		obj.secondNum = parseInt(arg_array[1]);
		
		return obj;
	} // end of getCommandLineVariables
})();