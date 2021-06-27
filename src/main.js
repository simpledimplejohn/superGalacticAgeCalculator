import UserAge from './../src/js/scripts.js'

console.log("main!")
const newUserAge = new UserAge ("john", 42, 74, "jupiter", "advanced civilization");



// UI interface through the console

console.log("For the user named: ", newUserAge.userName);

console.log('On Earth this person is: ', newUserAge.age, "years old");
console.log('on earth a person could be expected to live to be ', newUserAge.lifeExpect)
console.log('if you lived on', newUserAge.planet,'you would be ', Math.floor(newUserAge.newPlanetAge()), " years old in ", newUserAge.planet, " years");
console.log('you should be expected to live to be ', newUserAge.newLifeExpect(), "years oldliving on", newUserAge.planet, "with a", newUserAge.habitat, "for protection");
