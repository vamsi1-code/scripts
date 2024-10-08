function random_Char(){
    let char=[0,1,2,3,4,5,6,7,8,9]
    let res="";
    for(i=0;i<char.length;i++){
        let num = Math.floor(Math.random()*char.length)
       //console.log(num)
        if(i>3){
        break;
        }
        else{
            res=res+num;
        }
    }
        console.log(res);
}
random_Char()