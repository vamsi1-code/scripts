let str="SoMeThing";
let str1= "";
for(i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){
        // console.log(str[i]);
        // str1 =str[i].toLowerCase();
        // console.log(str1)
        str1=str1+str[i].toLowerCase()
    }
    else{
        // console.log("hello")
       str1= str1+str[i].toUpperCase();
        // console.log(str1)
    }
}

console.log(str1);
