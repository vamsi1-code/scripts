let sum = 0;
for(let i=1; i<=100;i++){
    if(i%2==0){
        sum += i;
        if( sum==650){
        console.log(`sumof first 1 to ${i} even numbers is ${sum}`);
        } 
    }
}
console.log(`sum of even numbers from 1 to 100 is ${sum}`);