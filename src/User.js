class User {
  constructor(username,password,age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if(password === this.password){
      return this.loggedIn = true;
    } else{
      throw new Error("incorrect password");
    }
  }

  logout(){
    return this.loggedIn = false;
  }
}

module.exports = User
