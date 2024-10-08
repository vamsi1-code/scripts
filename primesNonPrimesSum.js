let  num = "22265"
let sum=0;
let Esum=0;
for(i of num){
    let count = 0;
for(let x=1;x<=i;x++){
    if(i%x==0){
        count++
    }
}
 if(count==2){
        sum = sum +Number(i);
        
    }
    else{
         if(i==1){
            Esum=Esum+0
        }
        else{
        Esum=Esum+Number(i);}
    }
  }
// console.log(sum)
// console.log(`Sum of Non primesis  ${Esum}`)
if(sum>Esum){
    console.log(`Primes Sum is Bigger ${sum}`)
}
else{
    console.log(`NonPrimes Sum is Bigger ${Esum}`)
}
