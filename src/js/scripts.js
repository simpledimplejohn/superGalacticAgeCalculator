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

  newLifeExpect () {
    if (this.habitat === "spaceSuit") {
      return this.lifeExpect / 50;
    } else if (this.habitat === "outpost") {
      return this.lifeExpect / 10;
    } else if (this.habitat === "advanced civilization") {
      return this.lifeExpect * 10;
    } else {
      return this.lifeExpect / 1000;
    }
  }

  howOld () {
    if (this.newLifeExpect() > this.age) {
      return "congratulations to a long and happy life";
    } else {
      return "things don't look well";
    }
  }
}