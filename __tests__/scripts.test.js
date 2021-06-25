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
      earthLifeExpect = 74,

    })
  })
  test('mercuryAge() returns change earthAge * 365 / 88 rounded', () => {
      const newUserAge = new UserAge();
      expect(newUserAge.mercuryAge()).toEqual(174);
  });

  test('venusAge() returns earthAge * 365 / 225 rounded', () => {
    const newUserAge = new UserAge();
    expect(newUserAge.venusAge()).toEqual(68);
  });

  test('marsAge() returns earthAge * 365 / 687 rounded', () => {
    const newUserAge = new UserAge();
    expect(newUserAge.marsAge()).toEqual(22);
  });

  test('jupiterAge() returns earthAge * 365 / 4300 rounded', () => {
    const newUserAge = new UserAge();
    expect(newUserAge.jupiterAge()).toEqual(3);
  });

  test('randomLifeExpectancy returns a value between 50 and 124 rounded', () => {
    const newUserAge = new UserAge();
    for (let i = 0; i < 200; i++) {
      const age = newUserAge.randomLifeExpectancy();
      expect(age).toBeGreaterThanOrEqual(50);
      expect(age).toBeLessThanOrEqual(124);
    }
    
    
  })
});