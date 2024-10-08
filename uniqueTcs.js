let num = [1,2,-1,1,3,1];
res=[]
for(i=0;i<num.length;i++){
    count=0;
for(j of num){
    if(num[i]==j){
        count++
    }
}
if(count==1){
    res.push(num[i]);
}
}
console.log(res.join(","))