let str = "hellohello";
let str1="";
for(i=0;i<str.length;i++){
 if(i%2==0){
    str1=str1+str[i].toUpperCase();
 }
 else{
    str1=str1+str[i].toLowerCase()
 }
}
console.log(str1);