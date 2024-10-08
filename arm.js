let num= "408";
let z;
let sum=0;
for(i of num){
    z = Number(i)**3;
    sum = sum+z;
}
if(sum ==num){
    console.log(num+" yes it is armstrong Number")
}
else{
    console.log(num+" No it is not armstrong Number")
}