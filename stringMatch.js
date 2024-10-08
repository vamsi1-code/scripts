// let arr=['hello','2worww3wld',"hii",'vamsi','123','1232'];
// let arr1=[];
// let j=0;
// let k=0;
// let arr2=[];
// for(i of arr){
//    if(isNaN(i)){
//    arr1[j]=i;
//    j++
//    }
//    else{
//     arr2[k]=i;
//     k++
//    }
// }
// console.log(arr1)
// console.log(arr2)
// let arr=[];
// let x = arr.push("hjbj",24,45);
// let arr1 = [1,2,4,6,7,8];;
// let y=arr1.pop();
// console.log(y);
let arr=[1,2];
let x = arr.length
function push(...y){
   
    for(z=x;z<=arr.length;z++){
        for(c of y){
        arr[z]=c;
    }
    }
    return x;
}
console.log(push(5,6,7))
console.log(arr);
// let arr=[1,2];
//  let x = arr.length
// function pop(y){
//      //x=x-1;
//     // arr[x]=null;
//     z=arr[arr.length-1];
   
    
//     arr.length=arr.length-1;
//     return z ;
    
// }
// console.log(pop())
console.log(arr);



