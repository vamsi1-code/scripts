// Most Commonly Used two Character in String(can not use predefined function)

// Input: ‘Hii i am ram’
// Output; i, a 
let input=prompt("enter a string: ");
let count;
let res=''
for(i=0;i<input.length;i++){
    count=0;
    for(j=0;j<input.length;j++){
        if(input[i]==input[j]){
            count++;
        }
    }
    if(count>1 &&!res.includes(input[i])){
        res = res+input[i];
    }
}
       // console.log(res);
         let d=''
        for(z of res){
          if(z==" "){
              d=d+""; 
          }
          else{
              d=d+z;
          }
      }
  
      for(v=0;v<d.length && v<2;v++){

              console.log(d[v])
      }
//console.log(d);
