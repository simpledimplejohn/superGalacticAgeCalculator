import UserAge from './../src/js/scripts.js'

describe('UserAge', () => {

  test('should register that the class UserAge is present', () => {
    const newUserAge = new UserAge();
  });

  test('should correctly create a user object with five properties', () => {
    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.userName).toEqual("john")
    expect(newUserAge.age).toEqual(42)
    expect(newUserAge.lifeExpect).toEqual(74)
    expect(newUserAge.planet).toEqual("mercury")
    expect(newUserAge.habitat).toEqual("outpost")
  });

  test('3 should return newUserAge.age * (365/88)', () => {
    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.mercuryAge()).toEqual(174);
  });

  test('4 should return newUserAge.age * (365/225)', () => {
    const newUserAge = new UserAge("john", 42, 74, "venus", "outpost");
    expect(newUserAge.venusAge()).toEqual(68);
  });

  test('5 should return newUserAge.age * (365/687)', () => {
    const newUserAge = new UserAge("john", 42, 74, "mars", "outpost");
    expect(newUserAge.marsAge()).toEqual(22);
  });
});