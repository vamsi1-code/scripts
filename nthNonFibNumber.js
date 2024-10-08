let num = +prompt("enter a nth Nonfib Series: ");
a=0,b=1,nonfib=0,res='';
nthnf=0;
while(nonfib!=num){
    for(i=a+1;i<b;i++){
        // console.log(i)
        if(i<=num){
            // console.log(i);
            res=res+" "+i;
        }
        nonfib++
         nthnf=i;
        if(nonfib==num){
            break
        }
    }
   
    c=a+b;
    a=b;
    b=c
}
 // console.log(nthnf)
 console.log(res);