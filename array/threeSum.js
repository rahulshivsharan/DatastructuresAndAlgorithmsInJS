(function(){
  var myArgs = process.argv.slice(2);
  
  var binarySearch = binarySearch;
  var bubbleSort = bubbleSort;
  var twoSum = twoSum;
  var threeSum = threeSum;
  
	function threeSum(inputArr,targetVal){
		inputArr = inputArr.split(",");
		targetVal = parseInt(targetVal);	
		
		for(var i = 0; i < inputArr.length; i++){
			inputArr[i] = parseInt(inputArr[i]);
		}
		
		inputArr = bubbleSort(inputArr);// sorting the array using bubble sort	
		console.log("For array ",inputArr);
		
		var val = undefined, arr = undefined, returnArray = undefined;
		
		// itering through array to so that [1,3,6,8] 10 = 1,3,6
		for(var i = 0; i < inputArr.length; i++){
			val = targetVal - inputArr[i];
			arr = inputArr.slice((i+1));
			
			// applying two sum to the remaining sub-Array i.e for [1,2,3,4,5] 3 = 1,2
			returnArray = twoSum(arr,val); 
			
			if(returnArray.length === 2){
				console.log("Num 1 = "+returnArray[0]+",\nNum 2 = "+returnArray[1]+",\nNum 3 = "+inputArr[i]);
				break;
			}
		}
	}
  
	function twoSum(arr, targetVal){		
		
		var numTobeFound = undefined
		var obj = undefined;
		var returnArray = [];
		for(var i = 0; i < arr.length; i++){
			numTobeFound = targetVal - arr[i];
			obj = binarySearch(arr,numTobeFound);	
			
			if(obj["isFound"] === true){				
				returnArray[0] = arr[i];
				returnArray[1] = numTobeFound;
				break;
			}
		}
		
		return returnArray; 
	}
  
 
 	function bubbleSort(arr){
		var temp = undefined;
		var hasSwapped = false;
		var currentNum = 0, nextNum = 0, totalLength = arr.length;
		do{
			
			hasSwapped = false;
			for(var i = 0; i < (totalLength - 1); i++){
				currentNum = arr[i];
				nextNum = arr[i + 1];
			
				if(currentNum > nextNum){
					temp = currentNum;
					currentNum = nextNum;
					nextNum = temp;
					arr[i] = currentNum;
					arr[i+1] = nextNum;
					hasSwapped = true;
				}
			}
			
		}while(hasSwapped === true);
		
		return arr;
	}
  
  	function binarySearch(arr,num){		
		var outputObj = {
			"isFound" : false,
			"num" : undefined
		};
		var pivot = parseInt(arr.length / 2), leftIndex = 0, arrNew = undefined, totalLength = arr.length;
		if(totalLength > 2 && arr[pivot] === num){
			outputObj["isFound"] = true;
			outputObj["num"] = num;
			return outputObj;
		}else if(totalLength > 2 &&  arr[pivot] > num){
			leftIndex = 0;
			arrNew = arr.slice(leftIndex,pivot);
			return binarySearch(arrNew,num)
		}else if(totalLength > 2 && arr[pivot] < num){
			leftIndex = pivot + 1;
			arrNew = arr.slice(leftIndex,totalLength);
			return binarySearch(arrNew,num);
		}else if(totalLength === 2 && (num === arr[0] || num === arr[1])){
			outputObj["isFound"] = true;
			outputObj["num"] = num;
			return outputObj;
		}else if(totalLength === 1 && num === arr[0]){
			outputObj["isFound"] = true;
			outputObj["num"] = num;
			return outputObj;
		}else{
			outputObj["isFound"] = false;
			outputObj["num"] = undefined;
			return outputObj;
		}
			
	}


})();
