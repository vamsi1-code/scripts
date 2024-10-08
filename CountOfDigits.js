function check(num,check){
    let count=0
    for(i in num){
    if(num[i]==check){
        count++
    }
    }
   return count;
}
const num ="345567"
let b='';
for(i=0;i<num.length;i++){
    if(!b.includes(num[i]))
        b+=num[i];
}
for(i of b){
    // check(num,i);
    console.log(`${i} repeated ${ check(num,i)} times`);
}

