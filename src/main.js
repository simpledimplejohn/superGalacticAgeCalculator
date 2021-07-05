import UserAge from './../src/js/scripts.js'

const newUserAge = new UserAge ("john", 42, 75, "mercury", "outpost");

// UI interface through the console



console.log('Find out how long you will live in space');
console.log("For the user named: ", newUserAge.userName);
console.log('On Earth this person is: ', newUserAge.age, "years old");
console.log('on earth a person could be expected to live to be ', newUserAge.lifeExpect);

console.log('if you lived on', newUserAge.planet,'you would be ', Math.floor(newUserAge.newPlanetAge()), " years old in ", newUserAge.planet, " years");
console.log('you should be expected to live ', newUserAge.newLifeExpect(), "more years on ", newUserAge.planet, "with a", newUserAge.habitat, "for protection");
console.log('that means you will live to be:', newUserAge.age + newUserAge.newLifeExpect())

console.log("just as an aside ", newUserAge.userName, ", ", newUserAge.howOld());
