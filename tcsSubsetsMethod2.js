arr1=[1,3,4,5,2];
arr2=[2,4,3,1,7,5,15,1];
count=0;
arr3=[];
for(i of arr2){
    if(!arr3.includes(i)){
        arr3.push(i)
    }
}
for(i of arr1){
    for(j of arr3){
        if(i==j){
            count++;
        }
    }
}
if(count==arr1.length){
    console.log("arr1 is subset")
}
else{
    console.log("arr1 is not a subset")
}
