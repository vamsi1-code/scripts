let num = [1,2,3,4,5,0,7,8,9];
max= num[0],maxstr=""
for(i=0;i<num.length-1;i++){
    res=""
    prod=num[i]
    res=res+num[i]
    for(j=i+1;j<num.length;j++){
        max=Math.max(prod,max);
        prod=prod*num[j];
        res=res+" "+num[j];
    }
    if(prod>max){
            max=prod;
            maxstr=res;
        }
}
console.log(max,maxstr.trim().split(" ").map(Number));