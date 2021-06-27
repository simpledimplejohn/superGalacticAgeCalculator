import UserAge from './../src/js/scripts.js'

console.log("main!")
const newUserAge = new UserAge ("john", 42, 74, "mercury");

// UI interface through the console

console.log("For the user named: ", newUserAge.userName);

console.log('On Earth this person is: ', newUserAge.age, "years old");
console.log('on earth a person could be expected to live to be ', newUserAge.lifeExpect)
