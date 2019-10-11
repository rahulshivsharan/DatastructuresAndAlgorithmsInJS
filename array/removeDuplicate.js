(function(){
	var myArgs = process.argv.slice(2);
  var removeDuplicates = removeDuplicates;
  
  /*	
	Remove duplicates from array		
	*/	
	function removeDuplicates(arr){
		if(myArgs.length === 0){
			throw "Not array of Numbers found";
		}
		
		var arr = myArgs[0]; // assigning array		
		arr = arr.split(",");		
		var totalLength = arr.length;		
		var isSwapped = false;
		var arr2 = [];
		var currentNum = -1,
			nextNum = -1;
			
		for(var i = 0; i < totalLength; i++){
			(function(myArray, index){
				myArray[index] = parseInt(myArray[index]);
			})(arr, i);
		}
		
		// bubble sort the array
		do{
			isSwapped = false;			
			for(var i = 0; i < (totalLength - 1); i++){
				
				if(arr[i] > arr[i + 1]){					
					//swap
					(function(myArray,point,nextPoint){
						var temp = myArray[point];
						myArray[point] = myArray[nextPoint];
						myArray[nextPoint] = temp;								
					})(arr,i,i+1);
					isSwapped = true;
				}
				
			}			
		}while(isSwapped === true)
		
		// compare current number with next number and add to array
		for(var i = 0; i < (totalLength - 1); i++){
			currentNum = arr[i];
			nextNum = arr[i + 1];
			if(currentNum !== nextNum){
				arr2.push(currentNum);	
				
				if(i === (totalLength - 2)){ // if current index has reached second last position
					arr2.push(nextNum);		
				}	
			}else if(i === (totalLength - 2)){ // is current index equals second last index
				arr2.push(currentNum);
			}else{
				continue;
			}
		}
		
		console.log("Original ",arr);
		console.log("new ",arr2);
	}
});  
