let num = prompt("enter a number: ").split("").map(Number);
let emp = [];
for(i of num){
    if(!emp.includes(i)){
        emp.push(i);
    }
}
count=0;
//console.log(emp)
function check(x){
    
    for(i of num){
        if(i==x){
            count++
        }
    }
     console.log(`The number ${x} repeated ${count} times`);
}
 for(j of emp){
    //  console.log(j)
     check(j);
 }  