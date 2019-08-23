(function(){
	var myArgs = process.argv.slice(2);

	var twoSum = twoSum;
	var bubbleSort = bubbleSort;
	var binarySearch = binarySearch;
	
	
	function twoSum(inputArr, targetVal){		
		inputArr = inputArr.split(",");
		targetVal = parseInt(targetVal);	
		
		for(var i = 0; i < inputArr.length; i++){
			inputArr[i] = parseInt(inputArr[i]);
		}
		
		var arr = bubbleSort(inputArr);	
		var numTobeFound = undefined
		var obj = undefined;
		
		for(var i = 0; i < arr.length; i++){
			numTobeFound = targetVal - arr[i];
			obj = binarySearch(arr,numTobeFound);	
			if(obj["isFound"] === true){
				console.log("Num 1 = "+arr[i]+",\nNum 2 = "+numTobeFound);
				break;
			}
		}
	}
	
	function binarySearch(arr,num){
		console.log("Array is ",arr," number to be found ",num);
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
	
	var param1 = myArgs[0];
	var param2 = myArgs[1];
	twoSum(param1, param2);
	
})();
