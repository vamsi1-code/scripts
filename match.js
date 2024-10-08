let arr = ['hello','world','this','a','test'];
let arr1=[];
for(i=0;i<arr.length;i++){
    if(!arr[i].match('o')){
    arr1.push(arr[i])
    }
}
console.log(arr1)