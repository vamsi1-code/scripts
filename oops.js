class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    createProfile(){
        console.log(this.name+" "+"profile created"+" "+this.email)
    }
    logout(){
        console.log(this.name+" "+"user logged out")
    }
}
let user1 = new user("vamsi","vamsi@gmail.com");
user1.createProfile();
let user2= new user("naveen","naveennavara@gmail.com")
user2.createProfile();
user1.logout();
user2.logout();