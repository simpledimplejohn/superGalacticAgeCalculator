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
    
  }
}