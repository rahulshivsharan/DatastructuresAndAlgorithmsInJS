(function(){
	'use strict';

	
	
	var getCommandLineVariables = getCommandLineVariables;	
	var mergeSort = mergeSort;
	var mergeAndSort = mergeAndSort;
	var sort = sort;
	var swap = swap;
	var divide = divide;	
	var arrayOfArrays = [];

	mergeSort();	

	/*
		Merge sort main function.
		The below merge-sort is based on divide and conquor. 
	*/ 
	function mergeSort(){
		var array = getCommandLineVariables();		
		var	dummyArray = undefined;				
		
		// dividing the array into subarrays
		divide(array);
		sort();
		console.log(" Divided ",arrayOfArrays);

		do{
			if(arrayOfArrays.length > 1){
				dummyArray = mergeAndSort(arrayOfArrays[0],arrayOfArrays[1]);	
				arrayOfArrays = arrayOfArrays.slice(2,arrayOfArrays.length);
				arrayOfArrays.push(dummyArray);
			}
			console.log(" Sorted ",arrayOfArrays);	
		}while(arrayOfArrays.length > 1);						
	} // end of mergeSort


	/*
		Capture the numbers passed as commandline arguments
	*/
	function getCommandLineVariables(){
		var array = process.argv.slice(2);
		array = array.map(function(num){
			return parseInt(num);
		});		
		return array;
	} // end of getCommandLineVariables

	/*
		Dividing the array into sub arrays
	*/
	function divide(theArray){
		var pivot = theArray.length/2,
			leftArray = undefined,
			rightArray = undefined;
							
		pivot = parseInt(pivot);			

		if(pivot >= 1){
			leftArray = theArray.slice(0,pivot);
			rightArray = theArray.slice(pivot,theArray.length);
			
			if(leftArray.length > 2){
				divide(leftArray) 
			}else{
				arrayOfArrays.push(leftArray);	
			}
				
			if(rightArray.length > 2){
				divide(rightArray);	
			}else{
				arrayOfArrays.push(rightArray); 	
			} 
								
		}else{
			arrayOfArrays.push(theArray);
		}			
	} // end of divide

	/*
		merge two sorted arrays
		in one sorted array
	*/
	function mergeAndSort(firstArray,secondArray){
		
		var mergedArray = [], i = 0, j = 0;

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
		}

		while(j < secondArray.length){
			mergedArray.push(secondArray[j]);
			j++;
		}

		return mergedArray;	 
	} // mergeAndSort

	/*
		Sort elements of the divided arrays
	*/
	function sort(){
		for(var x = 0; x < arrayOfArrays.length; x++){
			if(arrayOfArrays[x].length === 2 && arrayOfArrays[x][0] > arrayOfArrays[x][1]){
				swap(0,1,arrayOfArrays[x]);
			}
		}
	} // end of sort

	/*
		Swap numbers accross the position
	*/
	function swap(currentPosition,nextPosition,array){
		var temp = array[currentPosition];
		array[currentPosition] = array[nextPosition];
		array[nextPosition] = temp;
	} // end of swap
})();