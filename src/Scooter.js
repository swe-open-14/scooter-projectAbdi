class Scooter {
  static nextserial = 1;
  constructor(station,user){
  this.station = station;
  this.user = null;
  this.serial = Scooter.nextserial++;
  this.charge = 100
  this.isBroken = false;

  }

  rent(user){
    if(this.charge < 20){
      throw new Error('Scooter needs to charge');
    } else if(this.isBroken == true){
      throw new Error("Scooter needs repair");
    } else{
      this.user = user;
      this.station = null;
      return this.user;
    }
  }

  dock(station){
    this.user = null;
    this.station = station;
    return this.station;
  }
}
module.exports = Scooter
