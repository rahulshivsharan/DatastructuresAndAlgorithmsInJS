(function(){
	'use strict';

	var getCommandLineVariables = getCommandLineVariables;	

	var mainFunction = mainFunction;

	mainFunction();

	function mainFunction(){
		var array = getCommandLineVariables();
		var firstArray = array[0], 
			secondArray = array[1],
			mergedArray = [], i = 0, j = 0;

		while(i < firstArray.length && j < secondArray.length){
			
			if(firstArray[i] < secondArray[j]){
				mergedArray.push(firstArray[i]);
				i++;
			}else{
				mergedArray.push(secondArray[j]);
				j++;
			}

		} // end of while

		// if length of first array is greater that second array
		while(i < firstArray.length){
			mergedArray.push(firstArray[i]);
			i++;
		}

		// if length of second array is greater that first array
		while(j < secondArray.length){
			mergedArray.push(secondArray[j]);
			j++;
		}

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