let  num = 15;
let count = 0;
for(i=1;i<=num;i++){
    if(num%i==0){
        count++
    }
}
 if(count==2){
        console.log("yes it is prime");
    }
    else{
       console.log("No it is not prime"); 
    }