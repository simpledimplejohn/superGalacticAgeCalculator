import UserAge from './../src/js/scripts.js'

const newUserAge = new UserAge ("john", 42, 74, "mercury", "advanced civilization");

// UI interface through the console



console.log('Find out how long you will live in space');
console.log("mercury age", newUserAge.mercuryAge());
console.log('mercuryLifeExpect', newUserAge.mercuryLifeExpect());
console.log("mercury years left", newUserAge.mercuryYearsLeft());
