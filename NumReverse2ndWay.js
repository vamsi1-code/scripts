let num =+prompt("enter a number: ");
let res=0;
let rem;
let nNum;
if(num<0){
     nNum=num*-1;
}
else{
    nNum=num;
}
while(nNum!=0){
    rem= nNum%10;
    res=res*10+rem;
    nNum=Math.floor(nNum/10);
}
if(num<0){
    console.log(res*-1);
}
else{
    console.log(res);
}
