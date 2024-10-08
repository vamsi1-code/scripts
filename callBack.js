const num = [2,8,23,46,12];
let first1=0;
let max=num[0];
let first = num.find(myfun);
function myfun(value,index,arr){
    
    if(value>18){
        if(first1==0){
            max=value;
            first1++;
        }
        else{
            if(max<value){
                max=value
            }
        }
    }
 
}
 console.log(max)