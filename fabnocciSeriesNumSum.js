let input= prompt("enter a number");
let max=input[0];
for(i=0;i<input.length;i++){
    if(input[i]>max){
        max=input[i]
    }
}
console.log(max)
let a=0;
let b=1;
let c;
let sum=0;

for(i=1;i<max;i++){
    c=a+b;
    a=b;
    b=c;
    for(num of input){
        
        if(c==num){
           console.log("c",c)
            sum=sum+c;
           
        }
    }
    }


 console.log("sum",sum)