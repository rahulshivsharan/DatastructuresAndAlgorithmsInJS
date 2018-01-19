(function(){
	'use strict';

	
	var swap = swap;
	var getCommandLineVariables = getCommandLineVariables;	
	var mergeSort = mergeSort;
	var divide = divide;
	var bubbleSort = bubbleSort;
	var merge = merge;
	var arrayOfArrays = [];

	mergeSort();	

	/*
		Merge sort main function.
		The below merge-sort is based on divide and conquor. 
	*/ 
	function mergeSort(){
		var array = getCommandLineVariables();		
		var	recheck = false,
			isRechecked = false;				
		
		// dividing the array into subarrays
		divide(array);	
		console.log(" Divided ",arrayOfArrays);
		do{			
			
			if(arrayOfArrays.length === 1 && recheck === true){
				recheck = false;
				isRechecked = true;
			}

			for(var x = 0; x < arrayOfArrays.length; x++){
				if(arrayOfArrays[x].constructor.name === "Array"){
					bubbleSort(arrayOfArrays[x]);										
				} // end of if				
			} // end of for

			console.log(" Merged ",arrayOfArrays);
			
			arrayOfArrays = merge(arrayOfArrays);
			

			if(arrayOfArrays.length === 1 && isRechecked === false){
				recheck = true;
			}


						
		}while(arrayOfArrays.length > 1 || recheck);

		console.log(arrayOfArrays[0]);	
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
		Swap numbers accross the position
	*/
	function swap(currentPosition,nextPosition,array){
		var temp = array[currentPosition];
		array[currentPosition] = array[nextPosition];
		array[nextPosition] = temp;
	} // end of swap

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
		Used bubble sort for
		sorting the sub arrays
	*/
	function bubbleSort(array){			
		var totalElement = array.length, 
			currentElement = 0, 
			nextElement = 0, 
			isSwapped = false; 	

		do{
			isSwapped = false;
			for(var x = 0; x < totalElement; x++){
				currentElement = x;
				nextElement = x + 1;
				if(nextElement <= totalElement){
					if(array[currentElement] > array[nextElement]){
						swap(currentElement,nextElement,array);
						isSwapped = true;
					} // end of if
				}// end of if 
			} // end of for
			
		}while(isSwapped === true);		
	}// end of bubbleSort

	/*
		Merging the arrays in one array
	*/
	function merge(theArray){			
		var new_Array = [], currentElement = undefined, nextElement = undefined;
		
		for(var x = 0; x < theArray.length; x++){
			currentElement = theArray[x];
			nextElement = (theArray[x + 1] === undefined) ? undefined : theArray[x + 1];	
				
			if(currentElement.constructor.name === "Array" && nextElement !== undefined && nextElement.constructor.name === "Array"){
				new_Array.push(currentElement.concat(nextElement));
			}else{
				new_Array.push(currentElement);
			} // end of if 
			x++;
		} // end of for

		return new_Array;
	} // end of merge
})();