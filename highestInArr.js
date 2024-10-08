//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
//Example:
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
function largestArr(arr){
   
    let max_num=arr[0];
    let sl;
    for(i=0;i<arr.length;i++){
       
        if(arr[i]<arr[i+1]){
            sl=max_num;
            max_num=arr[i+1];
        }
       
    }
    console.log(sl)
    arr1.push(max_num)
}
 let arr1=[];
let arr=[2,3,6,6,5];

largestArr(arr);
 

 console.log(arr1)
