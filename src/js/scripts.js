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
      return Math.floor(this.age * (365/88));
    } else if (this.planet === "venus") {
      return Math.floor(this.age * (365/225));
    } else if (this.planet === "mars") {
      return Math.floor(this.age * (365/687));
    } else if (this.planet === "jupiter") {
      return Math.floor(this.age * (365/4300));
    } else {
      return "no data";
    }
  }
}