console.log("scripts!");

export default class UserAge {
  constructor () {
    this.newUser = "John";
    this.earthAge = 42;
  }

  mercuryAge () {
    return Math.floor(this.earthAge * (365 / 88));
  }

  venusAge () {
    return Math.floor(this.earthAge * (365 / 225));
  }

  marsAge () {
    return Math.floor(this.earthAge * (365 / 687));
  }

  jupiterAge () {
    return Math.floor(this.earthAge * (365 / 4300));
  }
}