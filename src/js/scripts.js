export default class UserAge {
  constructor (userName, age, lifeExpect, planet, habitat) {
    this.userName = userName;
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.planet = planet;
    this.habitat = habitat;
  }
  mercuryAge () {
    return Math.floor(this.age * (365/88));
  }
  venusAge () {
    return Math.floor(this.age *(365/225));
  }
  marsAge () {
    return Math.floor(this.age * (365/687));
  }
  jupiterAge () {
    return Math.floor(this.age * (365/4300));
  }
  mercuryLifeExpect () {
    return Math.floor(this.lifeExpect * (365/88));
  }
  venusLifeExpect () {
    return Math.floor(this.lifeExpect *(365/225));
  }
  marsLifeExpect () {
    return Math.floor(this.lifeExpect * (365/687));
  }
  jupiterLifeExpect () {
    return Math.floor(this.lifeExpect * (365/4300));
  }

  mercuryYearsLeft () {
    if (this.mercuryAge() > this.mercuryLifeExpect()) {
      return this.mercuryAge() - this.mercuryLifeExpect();
    } else {
      return this.mercuryLifeExpect() - this.mercuryAge();
    }
  }

  venusYearsLeft () {
    if (this.venusAge() > this.venusLifeExpect()) {
      return this.venusAge() - this.venusLifeExpect();
    } else {
      return this.venusLifeExpect() - this.venusAge();
    }
  }
  
  marsYearsLeft () {
    if (this.marsAge() > this.marsLifeExpect()) {
      return this.marsAge() - this.marsLifeExpect();
    } else {
      return this.marsLifeExpect() - this.marsAge();
    }  
  }

  jupiterYearsLeft () {
    if (this.jupiterAge() > this.jupiterLifeExpect()) {
      return this.jupiterAge() - this.jupiterLifeExpect();
    } else {
      return this.jupiterLifeExpect() - this.jupiterAge();
    }  
  }
}