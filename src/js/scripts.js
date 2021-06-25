console.log("scripts!");

export default class UserAge {
  constructor () {
    this.newUser = "John";
    this.earthAge = 42;
  }

  mercuryAge () {
    return Math.floor(this.earthAge * (365 / 88));
  }
}