arr1=[1,3,4,5,2,11];
arr2=[2,4,3,1,7,5,15,1];
function isSubset(a,b){
    for(i of a){
        if(!b.includes(i)){
            return "arr1[] is not a subset of arr2[]"
        }
    }
    return "arr1[] is a subset of arr2[]";
}
console.log(isSubset(arr1,arr2));