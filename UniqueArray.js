let arr=[3,5,1,2,1]
let count;
let Usum=0;
for(i=0;i<arr.length;i++){
     count=0;
    for(j=0;j<arr.length;j++){
    if(arr[i]==arr[j]){
        count = count+1; 
       
        // console.log([arr[i],arr[j]]);
    } 
}
if(count>1){
    
}
else{
    Usum = Usum+Number(arr[i]);
    console.log(arr[i]);
    
}
}

if(count>1){
    console.log("not unique");
}
else{
    console.log("unique");
    
}
console.log('unique elements sum is',Usum);
