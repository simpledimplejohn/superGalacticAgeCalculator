console.log("scripts!");



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
      return this.age * (365/88);
    } else if (this.planet === "venus") {
      return this.age * (365/225);
    } else if (this.planet === "mars") {
      return this.age * (365/687);
    } else if (this.planet === "jupiter") {
      return this.age * (365/4300);
    } else {
      return "no data";
    }
  }
}