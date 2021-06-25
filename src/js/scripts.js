console.log("scripts!");



export default class UserAge {
  constructor (userName, earthAge, earthLifeExpect) {
    this.userName = userName;
    this.earthAge = earthAge;
    this.earthLifeExpect = earthLifeExpect;
    
  }

  mercuryAge () {
    return Math.floor(this.earthAge * (365 / 88));
  }

  mercuryLifeExpect () {
    return Math.floor(this.earthAge * (356/88))
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