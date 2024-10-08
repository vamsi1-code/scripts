let d;
d  =  new Date(2021,5,17,12,32,13);
d = d.toString();
console.log(d);
e =new Date('2021-10-23T12:30:21');
e = e.toString();
console.log(e);
f= new Date('07/10/2021 12:30:23');
f = f.toString();
console.log(f);
g= new Date('2021-07-10');
g=g.toString();
console.log(g);
h=Date.now('2021-07-10');
console.log(h);
d= new Date('07-10-2022');
d=d.getTime();
d=d.valueOf()
console.log(d);
v = Math.floor(Date.now()/1000);

console.log(v);
k=new Date();
x=k.toString();
x=k.getTime();
x=k.getMonth()
x = k.getMonth();
console.log(x);
