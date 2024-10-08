//Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

//Example:

//findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
function findSingleNumber(arr){
    let count;
  for(i in arr){
      count=0;
      for(j in arr){
          if(arr[i]==arr[j]){
              count = count+1;
          }
      }
      if(!(count>1)){
          console.log(arr[i],"unique")
      }
     
      
  }
}
let arr1= [2, 2, 2, 3, 4, 4, 4]
findSingleNumber(arr1);

