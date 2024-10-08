let input = prompt("enter a number: ")
let first = 1;
let count;
let maxPrime;
for(num of input){
      count=0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==2){
        if(first==1){
            maxPrime=num;
            first++
        }
        else{
            if(maxPrime<num){
                maxPrime=num;
            }
        }
    }
}
console.log(maxPrime);
