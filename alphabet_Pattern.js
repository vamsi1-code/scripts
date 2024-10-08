let rows = 5;
ascii=65    ;
for(i=1;i<=5;i++){
    res="";
   
    // for(k=1;k<=rows-i;k++){
    //     res=res+" " 
    // }
for(j=1;j<=i;j++){
 res += String.fromCharCode(ascii) + " ";
 ascii++
}
 console.log(res);
}
