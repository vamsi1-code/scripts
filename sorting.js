let arr = [0,-1,1,4,3,8,9];
let max_num = arr[0];
let arr1=[];
let sec_max_num = max_num;
let temp;
let i ;
let n = arr.length;
for(i=0;i<=n;i++){
    
    if(arr[i]>max_num){
   
    sec_max_num = max_num;
    max_num = arr[i];

    

    
    }
    
    
}
arr.sort();
console.log(arr);
console.log(max_num, sec_max_num);
// console.log(max_num, sec_max_num, third_max_num);
// console.log(arr1)