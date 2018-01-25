(function(){
	'use strict';

	var getCommandLineVariables = getCommandLineVariables;	

	var mainFunction = mainFunction;

	mainFunction();

	function mainFunction(){
		var array = getCommandLineVariables();
		var firstArray = array[0], 
			secondArray = array[1],
			mergedArray = [];

		mergedArray = firstArray.concat(secondArray).sort(function(num1,num2){
			return num1 > num2;
		});

		console.log(mergedArray);	 
	} // mainFunction

	/*
		Capture the numbers passed as commandline arguments
	*/
	function getCommandLineVariables(){
		var arg_array = process.argv.slice(2),
			someArray = [];

		if(arg_array.length !== 2){
			throw new Error("Pass two comma seperated number string in accending order for example 1,2,3 4,5,6");
		}

		for(var i = 0; i < arg_array.length; i++){
			
			someArray.push((function(someString){
				var someArray = someString.split(",");
				
				someArray = someArray.map(function(str){
					return parseInt(str);
				});		
					
				return someArray;				
			})(arg_array[i]));	

		} // end of for

		
		return someArray;
	} // end of getCommandLineVariables		
})();