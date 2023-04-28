const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
// describe('scooter object', () => {
//   test('allows user to rent', () => {
//     // edit this to be a real test!
//     let newUser = new Scooter("Wood green");
//     expect(newUser.rent("Abdi")).toEqual("Abdi");
//   }
// )
// })
//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
  test('allows user to rent', () => {
    // edit this to be a real test!
    let newUser = new Scooter("Wood green");
    expect(newUser.rent("Abdi")).toEqual("Abdi");
  }
)



  //dock method
  test('allows user to dock', () => {
    // edit this to be a real test!
    let newUser = new Scooter("Wood green");
    expect(newUser.dock("Turnpike Lane")).toEqual("Turnpike Lane");
  }
)
  //requestRepair method

  //charge method

})

