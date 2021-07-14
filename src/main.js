import UserAge from './../src/js/scripts.js'

const newUserAge = new UserAge ("john", 42, 74, "mercury", "advanced civilization");

// UI interface through the console



console.log('Find out how long you will live in space');
console.log("venus age", newUserAge.jupiterAge());
console.log('venusLifeExpect', newUserAge.jupiterLifeExpect());
console.log("venus years left", newUserAge.jupiterYearsLeft());
