function random_Char(){
    let char="abcd"
    let res="";
    for(i=0;i<char.length;i++){
        let num = Math.floor(Math.random()*char.length)
        res= res+char[num];
       // console.log(num)
        // if(i>3){
        // break;
        // }
        // else{
        //     res=res+num;
        // }
    }
      console.log(res);
}
random_Char()