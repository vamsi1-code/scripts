let num = "3431";
let x = num.length;
sum = 0;
let i=0;let prod=1;
while(i<x){
    prod= prod*Number(num[i]);
    i++;
}
console.log(prod);