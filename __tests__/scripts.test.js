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

  test('6 should return newUserAge.age * (365/4300)', () => {
    const newUserAge = new UserAge("john", 42, 74, "juipter", "outpost");
    expect(newUserAge.jupiterAge()).toEqual(3);
  });

  test('7 should return newUserAge.lifeExpect * (365/88)', () => {
    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.mercuryLifeExpect()).toEqual(306);
  });

  test('8 should return newUserAge.lifeExpect * (365/225)', () => {
    const newUserAge = new UserAge("john", 42, 74, "venus", "outpost");
    expect(newUserAge.venusLifeExpect()).toEqual(120);
  });

  test('9 should return newUserAge.lifeExpect * (365/687)', () => {
    const newUserAge = new UserAge("john", 42, 74, "mars", "outpost");
    expect(newUserAge.marsLifeExpect()).toEqual(39);
  });

  test('10 should return newUserAge.lifeExpect * (365/4300)', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "outpost");
    expect(newUserAge.jupiterLifeExpect()).toEqual(6);
  });

  test('11 should return mercuryAge - mercuryLifeExpect if greater', () => {
    const newUserAge = new UserAge("john", 100, 74, "mercury", "outpost");
    expect(newUserAge.mercuryYearsLeft()).toEqual(108)
  })

  test('12 should return mercuryAge - mercuryLifeExpect if less', () => {
    const newUserAge = new UserAge("john", 42, 74, "mercury", "outpost");
    expect(newUserAge.mercuryYearsLeft()).toEqual(132)
  })
  
  test('13 should return venusAge - venusLifeExpect if greater', () => {
    const newUserAge = new UserAge("john", 100, 74, "venus", "outpost");
    expect(newUserAge.venusYearsLeft()).toEqual(42)
  })

  test('14 should return venusAge - venusLifeExpect if less', () => {
    const newUserAge = new UserAge("john", 42, 74, "venus", "outpost");
    expect(newUserAge.venusYearsLeft()).toEqual("you wont last long")
  })

  test('15 should return marsAge - marsLifeExpect if greater', () => {
    const newUserAge = new UserAge("john", 100, 74, "mars", "outpost");
    expect(newUserAge.marsYearsLeft()).toEqual(14)
  })

  test('16 should return marsAge - marsLifeExpect if lesser', () => {
    const newUserAge = new UserAge("john", 42, 74, "mars", "outpost");
    expect(newUserAge.marsYearsLeft()).toEqual("you wont last long");
  })

  test('17 should return jupiterAge - jupiterLifeExpect if greater', () => {
    const newUserAge = new UserAge("john", 100, 74, "jupiter", "outpost");
    expect(newUserAge.jupiterYearsLeft()).toEqual(2)
  })

  test('18 should return jupiterAge - jupiterLifeExpect if less', () => {
    const newUserAge = new UserAge("john", 42, 74, "jupiter", "outpost");
    expect(newUserAge.jupiterYearsLeft()).toEqual("you wont last long")
  })


});