# _Super Galactic Age Calculator_

#### _JavaScript code that calculates a users age based on what planet's calendar is being used_

#### By _**John Blalock**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Java Script_
* _jQuery_
* _webPack_
* _esLint_
* _jest_
* _ES6_

## Description

_This code demonstrates using TDD to build and test a set of methods of properties inside a class_

## Setup/Installation Requirements

* _Clone repository form github_
* _Navigate to root directory_
* _in console run 'nmp run build` to build webpack_
* _run in terminal_


## Known Bugs and Future Changes

* _Add user interface_

## License

_[MIT](https://opensource.org/licenses/MIT)_

_Copyright (c) 2021 John Blalock_

## Github Pages Link



## Contact Information

_simpledimplejohn@gmail.com_

## Specifications ##

Describe: `UserAge()`
Test: "should correctly create a user object with three properties"
Code: `let newUserAge = new UserAge();`
Expected: `newUserAge = {}`

Describe: `UserAge.prototype.mercuryAge()`
Test: "mercuryAge() returns change earthAge * 365 / 88 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUserAge = { 174 }`

Describe: `UserAge.prototype.venusAge()`
Test: "venusAge() returns change earthAge * 365 / 225 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUserAge = { 68 }`

Describe: `UserAge.prototype.marsAge()`
Test: "marsAge() returns change earthAge * 365 / 687 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUserAge = { 22 }`

Describe: `UserAge.prototype.jupiterAge()`
Test: "jupiterAge() returns change earthAge * 365 / 4300 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUserAge = { 3 }`

Describe: `UserAge.prototype.mercuryLifeExpect()`
Test: "mercuryLifeExpect() returns change earthAge * 365 / 88 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUser.mercuryLifeExpect() = { 306 }`

Describe: `UserAge.prototype.venusLifeExpect()`
Test: "venusLifeExpect() returns change earthAge * 365 / 225 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUser.venusLifeExpect() = { 120 }`

Describe: `UserAge.prototype.marsLifeExpect()`
Test: "marsLifeExpect() returns change earthAge * 365 / 687 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUser.marsLifeExpect() = { 39 }`

Describe: `UserAge.prototype.jupiterLifeExpect()`
Test: "jupiterLifeExpect() returns change earthAge * 365 / 4300 rounded"
Code: `const newUserAge = new UserAge("john", 42, 74); `
Expected: `newUser.jupiterLifeExpect() = { 6 }`
