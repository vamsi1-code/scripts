let i,j;
let x = "2madtregeam2"
j = x.length-1;
// console.log(x.length/2);
for(i=0;i<x.length/2;i++){
   if(x[i] != x[j]){
    return false
   }
   j--;
   // console.log(j)
} 
console.log("yes it is palindrome")