let num = "34315";
let Even_Sum =0;
let Odd_Sum = 0;
for(i in num){
    if(i%2==0){
        Even_Sum += Number(num[i]);
    }
    else{
        Odd_Sum += Number(num[i]);
    }
}
console.log(Even_Sum)
console.log(Odd_Sum);
if(Even_Sum>Odd_Sum){
    console.log("Even digits sum is greater");

}
else{
    console.log("odd digits sum is greater");
}