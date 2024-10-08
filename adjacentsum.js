let num= "1234578";
let sum1="";
let sum=0;
for(let i=0;i<num.length;i++){
    sum=0
    sum = Number(num[i])+Number(num[i+1]);
    if(num[i+1]==null){
        sum = Number(num[i]);
    }
    
    sum1 = sum1+sum
    i = i+1;
}
console.log(sum1);