(function(){
	'use strict';

	mainFunction();

	function mainFunction(){
		var array = getCommandLineVariables();
		var firstArray = array[0],
			secondArray = array[1];

		// sort individual arrays	
		bubbleSort(firstArray);
		bubbleSort(secondArray);

		console.log(firstArray," -+- ",secondArray);

		// merge two sorted arrays
		var merged_Array = merge(firstArray,secondArray);

		console.log(merged_Array);
	} // end of mainFunction

	// merge two sorted arrays
	function merge(firstArray,secondArray){
		var i = 0, j = 0, mergedArray = [];
		
		while(i < firstArray.length && j < secondArray.length){
			if(firstArray[i] < secondArray[j]){
				mergedArray.push(firstArray[i]);
				i++;
			}else{
				mergedArray.push(secondArray[j]);
				j++;
			}
		} // end of while

		// if length of first array is greater than second array
		while(i < firstArray.length){
			mergedArray.push(firstArray[i]);
			i++;
		} // end of while

		// if length of second array is greater than first array
		while(j < secondArray.length){
			mergedArray.push(secondArray[j]);
			j++;
		} // end of while

		return mergedArray;
	} // end of merge function

	// sort an array using bubble sort
	function bubbleSort(numArray){
		var i = 0, j = 0;
		for(;i < numArray.length; i++){
			for(j = i + 1; j < numArray.length; j++){
				if(numArray[i] > numArray[j]){
					swap(i,j,numArray);		
				}
			}
		}
	} // end of bubbleSort

	// swap number positions in an array
	function swap(currentIndex,nextIndex,arr){
		var temp = arr[currentIndex];
		arr[currentIndex] = arr[nextIndex];
		arr[nextIndex] = temp;
	} // end of swap

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