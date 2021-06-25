import UserAge from './../src/js/scripts.js'

describe('UserAge', () => {

  test('should correctly create a user object with three properties', () => {

    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.userName).toEqual("john")
  });


  test('mercuryAge() returns change earthAge * 365 / 88 rounded', () => {
      const newUserAge = new UserAge("john", 42, 74);
      expect(newUserAge.mercuryAge()).toEqual(174);
  });

  test('venusAge() returns earthAge * 365 / 225 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.venusAge()).toEqual(68);
  });

  test('marsAge() returns earthAge * 365 / 687 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.marsAge()).toEqual(22);
  });

  test('jupiterAge() returns earthAge * 365 / 4300 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.jupiterAge()).toEqual(3);
  });

  test('mercuryLifeExpect() returns change earthLifeExpect * 365 / 88 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.mercuryLifeExpect()).toEqual(306);
  });

  test('venusLifeExpect() returns change earthLifeExpect * 365 / 225 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.venusLifeExpect()).toEqual(120);
  });

  test('marsLifeExpect() returns change earthLifeExpect * 365 / 687 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.marsLifeExpect()).toEqual(39);
  });

  test('jupiterLifeExpect() returns change earthLifeExpect * 365 / 4300 rounded', () => {
    const newUserAge = new UserAge("john", 42, 74);
    expect(newUserAge.jupiterLifeExpect()).toEqual(6);
  });


});