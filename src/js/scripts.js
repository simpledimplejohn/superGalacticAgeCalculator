export default class UserAge {
  constructor (userName, age, lifeExpect, planet, habitat) {
    this.userName = userName;
    this.age = age;
    this.lifeExpect = lifeExpect;
    this.planet = planet;
    this.habitat = habitat;
  }
  newPlanetAge () {
    if (this.planet === "mercury") {
      return Math.floor(this.age * (365/88));
    } 
  }
}