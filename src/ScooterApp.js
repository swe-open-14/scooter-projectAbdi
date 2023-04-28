const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    // this.user = new User('John', 'Doe')
    // this.scooter = new Scooter('XYZ123', 'Blue')
    this.station = {
      woodGreen : [],
      TurnPikeLane : [],
      Finsbury : []
    }
    this.registeredUsers = {};
  }

  registeredUser(username, password, age) {
    for (let key in this.registeredUsers) {
      if (this.registeredUsers[key].username === username) {
        throw new Error("already registered");
      } else if(age < 18){
        throw new Error("to young to register");
      }
    }
    let newUser = new User(username, password, age);
        this.registeredUsers[username] = newUser;
        // console.log("user has been registered");
        console.log("Registered users after adding:", this.registeredUsers);
        return newUser;
  }

  // registeredUser(username, password, age) {
  //   for (let key in this.registeredUsers) {
  //     if (this.registeredUsers[key].username === username) {
  //       throw new Error("already registered");
  //     } else if(age < 18){
  //       throw new Error("to young to register");
  //     }
  //   }
  //   let newUser = new User(username, password, age);
  //       this.registeredUsers[username] = newUser;
  //       // console.log("user has been registered");
  //       console.log("Registered users after adding:", this.registeredUsers);
  //       return newUser;
  // }

  loginUser(username, password) {
    let user = this.registeredUsers[username];
    if (user) {
      try {
        user.login(password);
        console.log(`${username} has logged in.`);
        return true;
      } catch (error) {
        throw new Error("Username or password is incorrect");
      }
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  // logout(){
  //   return this.loggedIn = false;
  // }
  
  logoutUser(username) {
    let user = this.registeredUsers[username];
    if (user) {
      try {
        user.logout();
        console.log(`${username} is logged out.`);
        return (false, user.loggedIn = false);
      } catch (error) {
        throw new Error("Username or password is incorrect");
      }
    } else {
      throw new Error("Username or password is incorrect");
    }
  }

  createScooter(station){
    for (const key in this.station) {
      if (key == station) {
      let scooter = new Scooter(station);
      scooter.station = station;
      this.station[station].push(scooter);
      console.log("created new scooter")
      return this.station[key].length;
    } else{
      throw new Error("no such station");
    }
      }
      
      }

      dockScooter(scooter,station){
          const scootersAtStation = this.station[station];
        
          for (let i = 0; i < scootersAtStation.length; i++) {
            if (scootersAtStation[i] === scooter) {
              throw new Error("Scooter is already at this station");
            }
          }
          scootersAtStation.push(scooter);
          console.log("Scooter has been docked");
          return station;
        }

        rentScooter(scooter,user){
          for (const key in this.station) {
            for(let i = 0; i< this.station[key].length; i++){
              if(scooter == this.station[key][i]){
                scooter.rent(user)
                console.log("scooter is rented");
                return true;
              } else{
                throw new Error("Scooter is already rented");
              }
            }
          }
        
    }
  }

module.exports = ScooterApp
