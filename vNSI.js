// // let rows=+prompt("Enter NoOf rows:");
// let rows=7;
// let gap=1;
// for(i=rows;i>=1;i--){
//     res="";
//     ascii=65;
//     for(j=1;j<=i;j++){
//         res=res+String.fromCharCode(ascii);
//         ascii++;
//     }
//     if(i<rows){
//         res=res+" ".repeat(gap);
//         gap=gap+2;
//     }
//     if(i==rows){
//         let temp=res;
//         res=res.split("");
//         res.pop();
//         let nom=res;
//         // console.log(nom);
//         let rev=nom.reverse().join("");
//         let concated=temp+rev;
//         console.log(concated);
        
        
//     }
//     else{
//     let rev=res.trim().split("").reverse().join("");
//     res=res+rev;
//     console.log(res);
//     }
// }
let rows=7;
for(i=0;i<rows;i++){
    res="";
    ascii=65;
   for(j=1;j<=rows-i;j++){
       res=res+String.fromCharCode(ascii);
       ascii++
      
   }
    if(i==0){
           console.log(res+res.slice(0,res.length-1).split("").reverse().join(""))
       }
       else{
           console.log(res+" ".repeat(2*i-1)+res.split("").reverse().join(""));
       }
}