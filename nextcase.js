let str = 'some_thing_Are'
let res= "";
for(i=0;i<str.length;i++){
    if(str[i]!="_"){
        res=res+str[i]
    }
    else{
        res=res+str[i]
        if(str[i+1]==str[i+1].toUpperCase()){
            res=res+str[i+1].toLowerCase()
        }
        else{
            res=res+str[i+1].toUpperCase()
        }
        i++
    }
}
console.log(res)

