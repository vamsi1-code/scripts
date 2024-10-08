let num = prompt("enter a number: ");
let emp = [];
let dup=[];
let uni=[];
for(i of num){
    if(!emp.includes(i)){
      emp.push(i);
    }
}
console.log()
for(i of emp){
    c=0;
    for(j of num){
        if(i==j){
            c++
        }
    }
    if(c==1){
       uni.push(i);
    }
    else{
        if(!dup.includes(i)){
            dup.push(i);
        }
    }
}
//console.log(dup)

    if(dup.length==1){
        console.log(`the dupicates in the number is ${dup}`)
    }
    else if(dup.length==0){
        console.log("No duplicate values");
    }
    else{
        console.log(`the dupicates in the number are ${dup}`)
        
    }
   
//console.log(uni);
    if(uni.length==1){
        console.log(`the unique in the number is ${uni}`)
    }
    else if(uni.length==0){
        console.log("No unique values")
    }
    else{
        console.log(`the unique values in the number are ${uni}`)
        
    }
   
           