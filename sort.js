let arr=[3,56,7,9,1];
let arr1=[];

let swap=true;
function sorting(arr){
while(swap){
  swap =false
  for(i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        swap = true
        temp=arr[i+1];
        arr[i+1]=arr[i];
        arr[i]=temp;
    }
}  
}
}
sorting(arr)
console.log(arr)




// 3-8 
// 3 4 8 
// 3 4 6 8
// 3 4 2 1 6 8
// 3 2 1 4 6 8 
// 2 3 1 4 6 8
// 2 1 3 4 6 8 
// 1 2 3 4 6 8
// 