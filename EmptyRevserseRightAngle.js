let rows=5;
for(i=1;i<=rows;i++){
    res="";
    for(j=1;j<=rows;j++){
        
        if(j==1){
            res=res+i+" ";
        }
        else if(i+j==rows+1){
            res=res+rows+" ";
        }
        else if(i==1){
            res=res+j+" ";
        }
        else{
        res=res+"  " 
        }
    }
   
    
    console.log(res);
}