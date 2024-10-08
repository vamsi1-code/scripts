let num= prompt().split(" ").map(Number);
arr1=[];res=0;
for(i of num){
    if(!arr1.includes(i)){
        arr1.push(i);
    }
}
function repeat(a){
    count=0;pair=0;
    for(j of num){
        if(a==j){
            count++
        }
    }
     pair=Math.floor(count/2);
   return res=res+pair;
}
for(i of arr1){
    repeat(i)
}
console.log(repeat())