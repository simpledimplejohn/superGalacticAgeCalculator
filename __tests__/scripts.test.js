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
  test('mercuryAge() returns change earthAge * 365 / 88 rounded', () => {
      const newUserAge = new UserAge();
      expect(newUserAge.mercuryAge()).toEqual(174);
  });

  test('venusAge() returns earthAge * 365 / 225 rounded', () => {
    const newUserAge = new UserAge();
    expect(newUserAge.venusAge()).toEqual(68);
  });
});