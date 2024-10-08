// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let num = +prompt("enter a value");
let res = "";
let fact=1;
for(i=1;i<=num;i++){
    if(i<num){
        res = res+i+"*"
    }
    else{
        res = res+i+" = "
    }
    fact = fact * i;
}
console.log(res + fact);