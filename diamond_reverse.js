let row=5;

for(i=1;i<=2*row-1;i++){
    
    cols=(i<=row)?row-i+1:i-row+1
    spaces=(i<=row)?i-1:2*row-1-i
    res=""
    for(k=1;k<=spaces;k++){
        res=res+" "
    }

     for(j=1;j<=cols;j++){
            res=res+"* "
        }
  
    console.log(res);
}