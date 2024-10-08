let rows=10;
for(i=1;i<2*rows;i++){
    res=""
    stars=(i<=rows)?i:2*rows-i
    spaces=(i<=rows)?(2*rows)-(2*i)-1:(2*i)-(2*rows)-1
    spaces=(spaces<0)?0:spaces
    for(j=1;j<=stars;j++){
        if(j%2==0){
            res=res+"🦋 ";
        }
        else{
            res=res+"🦋 "
        }
    }
    if(i==rows){
        console.log(res+res.slice(0,res.length-3).split("  ").reverse().join(" "))
    }
    else{
        if(i<rows){
        console.log(res+"🕊  ".repeat(spaces)+res.split("  ").reverse().join(" "))
        }
        else{
            console.log(res+"𓅆  ".repeat(spaces)+res.split("  ").reverse().join(" "))
        }
    }
}