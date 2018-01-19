(function(){
	'use strict';

	var getCommandLineVariables = getCommandLineVariables;
	var swap = swap;
	var mainFn = mainFn;


	mainFn();
	/*
		Main function  

	*/
	function mainFn(){
		var array = getCommandLineVariables();
		var minValueIndex = 0, isMinValFound = false;
		

		for(var i = 0; i < array.length; i++){
			
			for(var j = (i+1); j < array.length; j++){
				if(array[j] < array[i]){
					minValueIndex = j;
					isMinValFound = true;
				} // end of if				
			}

			if(isMinValFound === true){
				swap(i,minValueIndex,array);
				isMinValFound = false;
			}
			
		} // end of for

		console.log(array);
	} // end of main Function

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
})();