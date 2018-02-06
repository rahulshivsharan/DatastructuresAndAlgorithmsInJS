(function(){
	'use strict';

	mainFunc();
	function mainFunc(){
		var array = getCommandLineVariables();
		var firstArray = array[0],
			secondArray = array[1],
			i = 0, 
			j = 0,
			mergedArray = [];

		while(i < firstArray.length && j < secondArray.length){
			if(firstArray[i] < secondArray[j]){
				mergedArray.push(firstArray[i]);
				i++;
			}else{
				mergedArray.push(secondArray[j]);
				j++;
			}
		} // end of while


		while(i < firstArray.length){
			mergedArray.push(firstArray[i]);
			i++;
		} // end of while	

		while(j < secondArray.length){
			mergedArray.push(secondArray[j]);
			j++;
		} // end of while

		console.log(mergedArray);	
	} // end of mainFunc

	/*
		search and insert
	*/
	function insert(theMergedArray,num,lessFlag,moreFlag,firstIndex,lastIndex){
		var pivotIndex = theMergedArray.length;
		var insertionIndex = 0;
		pivotIndex = parseInt(pivotIndex);
		
		if(pivotIndex === 0){
			insertionIndex = 0;
		}else if(theMergedArray[pivotIndex] < num){
			lessFlag = true;
			
		}else if(theMergedArray[pivotIndex] < num){
			moreFlag = true;
		}
	} // end of insert

	/*
		Capture the numbers passed as commandline arguments
	*/
	function getCommandLineVariables(){
		var arg_array = process.argv.slice(2),
			someArray = [], arr = [];

		if(arg_array.length !== 2){
			throw new Error("Pass two comma seperated number string in accending order for example 1,2,3 4,5,6");
		}

		for(var i = 0; i < arg_array.length; i++){
			
			arr = (function(someString){
				var numArray = someString.split(",");
				
				numArray = numArray.map(function(str){
					return parseInt(str);
				});		
					
				return numArray;				
			})(arg_array[i])

			someArray.push(arr);	

		} // end of for

		
		return someArray;
	} // end of getCommandLineVariables
})();