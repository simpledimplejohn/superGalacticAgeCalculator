import UserAge from './../src/js/scripts.js'

describe('UserAge', () => {

  test('should be able to find UserAge class', () => {
    const newUserAge = new UserAge();
  });

  test('add user age properties', () => {
    const newUserAge = new UserAge();
    expect(newUserAge).toEqual({
      newUser: "John",   
      earthAge: 42,   
    })

  })

});