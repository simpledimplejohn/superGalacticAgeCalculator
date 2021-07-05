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
    } 
  }
  newLifeExpect () {
    if (this.habitat === "spaceSuit") {
      return Math.floor(this.lifeExpect / 50);
    } else if (this.habitat === "outpost") {
      return Math.floor(this.lifeExpect / 10);
    } else if (this.habitat === "advanced civilization") {
      return Math.floor(this.lifeExpect * 10);
    } else {
      return Math.floor(this.lifeExpect / 1000);
    }
  }
}