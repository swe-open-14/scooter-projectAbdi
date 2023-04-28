const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')


describe('App Methods', () => {
    // tests here!
  
// register user
test('adds new user', () => {
  let scooterApp = new ScooterApp();
  let newUser = scooterApp.registeredUser("Abdi", "iayaa", 24);
  expect(newUser.username).toEqual("Abdi");
  expect(newUser.age).toEqual(24);
  expect(newUser.password).toEqual("iayaa");
});

test('fails to adds new user', () => {
    let scooterApp = new ScooterApp();
    let newUser = scooterApp.registeredUser("Abdi", "iayaa", 24);
    expect(() => scooterApp.registeredUser("Abdi", "iayaa", 24)).toThrow("already registered");
   
  });


// log in
test('logs in users', () => {
    let scooterApp = new ScooterApp();
    scooterApp.registeredUser("Abdi", "iayaa", 24);
    expect(scooterApp.loginUser("Abdi", "iayaa")).toEqual(true);
  });
// log out
test('logs out users', () => {
    let scooterApp = new ScooterApp();
    scooterApp.registeredUser("Abdi", "iayaa", 24);
    expect(scooterApp.logoutUser("Abdi")).toEqual(false);
  });
// createScooter
test('creates new scooter', () => {
    let scooterApp = new ScooterApp();
    expect(scooterApp.createScooter("woodGreen")).toEqual(1);
  });

// dock scooter
test('docks scooter', () => {
    let scooterApp = new ScooterApp("woodGreen");
    let scooterApp2 = new ScooterApp("Finsbury");
    expect(scooterApp.dockScooter(scooterApp,"woodGreen")).toEqual("woodGreen");
    expect(() => scooterApp.dockScooter(scooterApp,"woodGreen")).toThrow("Scooter is already at this station");
  });

//   rentScooter

test('rent scooter', () => {
    let scooterApp = new ScooterApp("woodGreen");
    let newUser = new User("Abdi","Iayaa",24);
    let newScooter = new Scooter("Wood green");
    expect(scooterApp.rentScooter(newScooter,newUser)).toEqual("woodGreen");
  });


})