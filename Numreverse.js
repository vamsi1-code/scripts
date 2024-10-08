let num =+prompt("enter a number: ");
let res=0;
let rem;
let nNum=Math.abs(num);
while(nNum!=0){
    rem= nNum%10;
    res=res*10+rem;
    nNum=Math.floor(nNum/10);
}
if(num<0){
    console.log("-"+res);
}
else{
    console.log(res);
}
