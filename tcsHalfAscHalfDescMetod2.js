let num= prompt().split(" ").map(Number);
num.sort((a,b)=>a-b);
mid = num.length/2;
firstarr = num.slice(0,mid);
secarr = num.slice(mid,num.length);
secarr=secarr.reverse();
console.log(firstarr.join(" ")+ " "+secarr.join(" "));
