(function(){
	'use strict';

	mainFunction();
	function mainFunction(){
		var array = getCommandLineVariables();
		var firstArray = array[0], 
			secondArray = array[1],
			arrayOfArrays = [],
			mergedArray = [], 
			i = 0;

		// merge two unsorted array in one unsorted array	
		mergedArray = merge(firstArray,secondArray);
		console.log("Unsorted array ",mergedArray);

		// divide the unsorted array into sub-arrays of length 
		// not more than 2
		divide(mergedArray,arrayOfArrays);		
		console.log("Array of unsorted sub-arrays ",arrayOfArrays);

		// sort the sub arrays
		sortDividedArray(arrayOfArrays);
		console.log("Array of sorted sub-arrays ",arrayOfArrays);	

		do{
			i = 0;
			if(i < arrayOfArrays.length - 1){
				firstArray = arrayOfArrays[i];
				secondArray = arrayOfArrays[i + 1]; 

				// merge two sorted arrays
				mergedArray = merge(firstArray,secondArray);
				
				// move the current index two position ahead,
				// for checking whether there is any room for further
				// elements.
				i = i + 2;  				
				if(i < arrayOfArrays.length){
					arrayOfArrays = arrayOfArrays.slice(i,arrayOfArrays.length);	
					arrayOfArrays.push(mergedArray);
				}else{
					arrayOfArrays = [];
					arrayOfArrays.push(mergedArray);
				}
				

			} // end of if
			console.log("--> ",arrayOfArrays);	
		}while(arrayOfArrays.length > 1);

		console.log("The final sorted array is ",arrayOfArrays[0]);			
	}// end of main Function



	/*
		this function accepts array of array where each i.e. [[23,4],[6,5].....] as input
		and sorts each array element, hence the output will be
		[[4,23],[5,6],.....]
	*/
	function sortDividedArray(arrayOfArrays){
		var temp = 0;
		for(var j = 0; j < arrayOfArrays.length; j++){
			if(arrayOfArrays[j].length === 2 && arrayOfArrays[j][0] > arrayOfArrays[j][1]){
				temp = arrayOfArrays[j][0];
				arrayOfArrays[j][0] = arrayOfArrays[j][1];
				arrayOfArrays[j][1] = temp;
			}
		} // end of for
	} // end of sortDividedArray

	/*
		Divide array into sub array where 
		each sub-array's length is 1 or 2 
	*/
	function divide(theArray,arrayOfArrays){
		var pivot = theArray.length/2,
			leftArray = undefined,
			rightArray = undefined;

		pivot = parseInt(pivot);
		
		if(pivot >= 1){
			leftArray = theArray.slice(0,pivot);
			rightArray = theArray.slice(pivot,theArray.length);

			if(leftArray.length > 2){
				divide(leftArray,arrayOfArrays);
			}else{
				arrayOfArrays.push(leftArray);	
			}

			if(rightArray.length > 2){
				divide(rightArray,arrayOfArrays);
			}else{
				arrayOfArrays.push(rightArray);	
			}
		}// end of if			
	} // end of divide


	/*
		Merge two arrays
	*/
	function merge(arrayOne,arrayTwo){
		var i = 0, j = 0, mergedArray = [];

		while(i < arrayOne.length && j < arrayTwo.length){
			if(arrayOne[i] < arrayTwo[j]){
				mergedArray.push(arrayOne[i]);
				i++;
			}else{
				mergedArray.push(arrayTwo[j]);
				j++;
			}
		} // end of while

		// if length of array 1 is greater than array 2
		while(i < arrayOne.length){
			mergedArray.push(arrayOne[i]);
			i++;
		}

		// if length of array 2 is greated than array 1
		while(j < arrayTwo.length){
			mergedArray.push(arrayTwo[j]);
			j++;
		}

		return mergedArray;
	}// end of merge	

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