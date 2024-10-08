function myfun(){
    console.log("hello")
}
function callback(){
    console.log("vamsi");
    setTimeout(callback, 3000);
}
callback();