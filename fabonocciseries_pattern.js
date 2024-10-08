let rows=4;
a=0;b=1;let c;
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=i;j++){
      res=res+a+" ";
      c=a+b;
      a=b;
      b=c;
    }
    console.log(res)
}