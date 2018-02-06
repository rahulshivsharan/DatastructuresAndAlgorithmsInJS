(function(){
	'use strict';

	main();

	function main(){
		var testNum = getCommandLineVariables();
		console.log("Is Number \""+testNum+"\" a prime number ? ",isPrimeNumber(testNum));
	}


	function isPrimeNumber(num){
		var limit = Math.sqrt(num);
		limit = Math.floor(limit);

		if(num <= 1){
			return false;
		}

		// if num is 2 or 3, than its a prime number
		if(num === 2 || num === 3){
			return true;
		}
		
		// check if number is divisible by 2, 
		// if yes then its not a prime number.
		if(num%2 === 0){
			return false;
		}
		
		for(var x = 2; x <= limit; x++){
			if(num%x === 0){
				return false;
			}
		}

		return true;
	} // end of isPrimeNumber

	// get the number from commandline argument
	function getCommandLineVariables(){
		var arg_array = process.argv.slice(2);

		if(arg_array.length !== 1){
			throw new Error("Pass a number");
		}
		
		
		return parseInt(arg_array[0]);
	} // end of getCommandLineVariables	
})();