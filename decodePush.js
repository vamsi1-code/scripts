let arr=[1,2];
let x = arr.length
function push(...y){
   
    for(z=0;z<y.length;z++){
        arr[x+z]=y[z]
    }

    x= arr.length;
    return x;
}
push(5,6,7)
console.log(arr);