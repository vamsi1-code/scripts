// let  num = prompt("enter a value");
function isPrime(num){
    let count = 0;
    for(i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
     if(count==2){
            console.log(num,"yes it is prime");
            sum = sum+Number(num);
        }
        else{
           console.log(num,"No it is not prime"); 
           return false;
        }
    }    
    let num = "5321";
    let sum=0;
    for(i of num){
        isPrime(i);
    }
    console.log(sum);