import UserAge from './../src/js/scripts.js'

describe('UserAge', () => {

  test('should correctly create a user object with five properties', () => {

    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.userName).toEqual("john")
  });

});