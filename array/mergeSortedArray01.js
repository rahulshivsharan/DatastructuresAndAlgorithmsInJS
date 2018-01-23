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

		for(i = 0; i < firstArray.length; i++){
			for(j = j; j < secondArray.length; j++){
				
				if(firstArray[i] < secondArray[j]){ // if number from first array is less than number of second array
					mergedArray.push(firstArray[i]);										
					break;
				}else{ // if number of second array is less than number of first array
					mergedArray.push(secondArray[j]);
				}

			} // end of for

			/*
				The below condition executes when 
				length of first array is greater than second array
			*/
			if(j >= secondArray.length){
				mergedArray.push(firstArray[i]);
			}
		} // end of for

		/*
			If length of second array is greater than
			first array
		*/
		for(j = j; j < secondArray.length;j++){
			mergedArray.push(secondArray[j])
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
			throw "Pass two comma seperated numbers";
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