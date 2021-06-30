import UserAge from './../src/js/scripts.js'

describe('UserAge', () => {

  test('should correctly create a user object with five properties', () => {

    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.userName).toEqual("john")
    expect(newUserAge.age).toEqual(43)
    expect(newUserAge.lifeExpect).toEqual(74)
    expect(newUserAge.planet).toEqual("mercury")
    expect(newUserAge.habitat).toEqual("outpost")
  });

});