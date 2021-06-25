import UserAge from './../src/js/scripts.js'

console.log("main!")
const newUserAge = new UserAge ();

// UI interface through the console

console.log("For the user named: ", newUserAge.newUser);

console.log('On Earth this person is: ', newUserAge.earthAge, "years old");
console.log('on earth a person could be expected to live to be ', newUserAge.earthLifeExpect)
