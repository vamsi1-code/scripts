let str = "some_Thing_re"
for(i=0;i<str.length;i++){
    if(str[i]=="_"){
        str = str.replace(str[i+1],str[i+1].toUpperCase());
    }
}
console.log(str);
