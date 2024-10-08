let num=[1,2,3,4,5,6,7];
let k = +prompt();
let n=+prompt();
let arr = num.slice(0,k+1);
let arr1 = num.slice(k+1,num.length);
let res = arr.join(",")+" "+arr1.join(",");
console.log(res);