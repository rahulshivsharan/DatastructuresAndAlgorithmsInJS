(function(){
	'use strict';

	mainFunction();

	function mainFunction(){
		var inputArray = [12,54,76,6,1,88,7,11,66];
		var arrayOfArrays = [];
		console.log("Input Array is ",inputArray);
		divide(inputArray,arrayOfArrays);
		console.log("Output Array is ",arrayOfArrays);
	} // end of mainFunction

	function divide(numArray,arrayOfArrays){
		var pivot = numArray.length/2,
			leftArray = undefined,
			rightArray = undefined;

		pivot = parseInt(pivot);
		
		if(pivot >= 1){
			leftArray = numArray.slice(0,pivot);
			rightArray = numArray.slice(pivot,numArray.length);

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


})();