const User = require('../src/User')

describe('User Methods', () => {
    // tests here!
  
// test username
test('return Username', () => {
    // edit this to be a real test!
    let newUser = new User("Abdi","Iayaa",24);
    let name = newUser.username;
    expect(name).toEqual("Abdi");
  }
)
// test password
test('return password', () => {
    // edit this to be a real test!
    let newUser = new User("Abdi","Iayaa",24);
    expect(newUser.password).toEqual("Iayaa");
  }
)
// test age
test('return age', () => {
    // edit this to be a real test!
    let newUser = new User("Abdi","Iayaa",24);
    expect(newUser.age).toEqual(24);
  }
)
// test login
test('login user', () => {
    // edit this to be a real test!
    let newUser = new User("Abdi","Iayaa",24);
    expect(newUser.login("Iayaa")).toEqual(true);
  }
)
// test logout
test('logout user', () => {
    // edit this to be a real test!
    let newUser = new User("Abdi","Iayaa",24);
    expect(newUser.logout()).toEqual(false);
  }
)

})
