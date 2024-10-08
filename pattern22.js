let rows=4;
for(i=1;i<=rows;i++){
    res=" ";
    for(j=1;j<=i;j++){
        if(j==1){
            res=res+i+" ";
             nextnum=i+rows-j
            
        }
        else{
            res=res+nextnum+" ";
            nextnum=nextnum+rows-j
        }
    }
    console.log(res)
}