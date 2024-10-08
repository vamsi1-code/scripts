let num = '8464169'
let count;
let sum=0;
for(i in num){
    count=0;
    for(j in num){
        if(num[i]==num[j]){
            count =count+1;
            
        }
        
    }
   
    if(count>1){
        
        console.log(num[i],"-",count)
    }
    else{
        // console.log(num[i]);
        sum = sum+Number(num[i])
        // console.log(num[i],"-",count)

    }
    
}
console.log(sum);