let num = '4 2 8 6 15 5 9 20';
let arr = num.split(" ").map(Number);
arr.sort((a,b)=>a-b);
res="";
j=arr.length-1;
for(i=0;i<arr.length;i++){
    if(i<arr.length/2)
    res=res+arr[i]+" ";
    else if(i>=arr.length/2){
        res=res+arr[j]+" ";
        j--;
    }
}
console.log(res);