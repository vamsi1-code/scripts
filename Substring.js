var k=0;
var arr1=[];
function check(x){
   let res='';
    for(i=0;i<x.length;i++){
        if(x[i]!=='o'){
        res=res+x[i];
        }
    }
    if(res==x){
     arr1[k] = res;
        k++;
    }
}
let arr = ['hello','world','this','a','test'];
for(j of arr){
    check(j);
}
console.log(arr1);

