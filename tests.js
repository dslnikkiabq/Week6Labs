//
//   Copyright (c) 2023 Promineo Tech
//   Author:  Promineo Tech Academic Team
//   Subject:  JavaScript DevTools, Debugging, and Unit Tests
//   FE Lab Week 06
// */

// /* ----------------------------------------------------- */
// // Key Term List:
// // DevTools
// // Chrome/FireFox/Safari/Opera/Microsoft Edge
// // Debugging
// // TDD (Test Driven Deployment)
// // BDD (Behavior Driven Deployment)
// // Mocha/Chai
// // assert/expect
// // describe/it/equal/to/deep
// // console.table()

// /* ----------------------------------------------------- */
// // Please do not alter the existing code unless instructed to do so.
// // Read the comments and add your code where it is specified for each question.
// /* ----------------------------------------------------- */

// /*------------------------ Debugging Examples ------------------------*/
console.log(`-------------------------- 
Question 1: Debugging!`)

/** Instruction: This lab is focused on two goals: 
 *               1) Increasing competence on reading and debugging errors in the console/browser
 *                  and debugging pre-written code
 *               2) Creating tests in mocha/chai for each question
 * 
 *  
 * Note:         Debugging is the art of tackling a specific problem from every angle.
 *               
 *               Think about the expected result, and consider the possible issues;
 *               Generally:    Is my code connected correctly? Is there a typo? 
 *                             Am I using this correctly? 
 *                             What kind of data type (string/array/object etc) am I working with?
 *               
 *               Specifically: My data type is a string.. am I able to use .map() on a string?                             
 *                             
 * 
 *               Question everything. console.log() everything.
 *               Dev tools and google are your friend :)
 * 
 * Step 1: Uncomment out the code below the question including the last console.log(). 
 *         Run your code and find the error.
 * Step 2: After you've fixed the error for that question, create a test in tests.js using mocha/chai
 * 
 * 
 * DO NOT REMOVE THE LAST CONSOLE.LOG() IT IS FOR CHECKING YOUR WORK
 * The titles are a hint at the expected answer, not a solution. Read the error in your browser.
 * You are given an example problem and test.
 *
/*--------------------------------------------------------------------*/
console.log('Test Question: Add two numbers')
/* -- STEP 1: DEBUG CODE --*/

// BROKEN CODE EXAMPLE:
// function addTwoNumbers (num1,num2) {
//    num1+num2
// }

// console.log(addTwoNumbers(2,3)) // ERROR IN CONSOLE: undefined
// AFTER DEBUGGING:
function addTwoNumbers(num1, num2) {
  return `num1 + num2 is: ${num1 + num2}`
}

console.log(addTwoNumbers(3, 3)) // logs 6
/* -- STEP 2: CREATE A TEST IN tests.js -- */
/*--------------------------------------------------------------------*/
console.log(`Test 1a: Sorted array of numbers:`)

let arrayOfNumbers2 = [5, 10, 15, 25, 20]
arrayOfNumbers2 = arrayOfNumbers2.sort((a, b) => a - b)

console.log(arrayOfNumbers2)
//this works as well with arrayOfNumbers2
/*----------------------------------------------------*/
console.log(`Test 1b: Manage my wallet `)

// class Wallet {
//   constructor(startingMoney) {
//     this.money = startingMoney
//   }

//   addMoney(amount) {
//     this.money += amount
//   }

//   removeMoney(amount) {
//     this.money -= amount
//   }
// }

// it('#Should be able to add money to my wallet', () => {
//    if (myWallet1) '=' new Wallet(10)
//    myWallet1.addMoney(5)

// expect(myWallet1.money).to.equal(15)

// })
const myWallet1 = new Wallet(100)
myWallet1.removeMoney(10.50)
myWallet1.addMoney(3.50)

console.log(myWallet1.money)

/*----------------------------------------------------*/
console.log(`1c: Day of the Week`)
//In some cases, there's no error, but you're not getting your expected result back.
//Reminder: Switch statements are a 'cleaner' version of if/else

// const dayOfTheWeek = (num) => {
//   switch (num) {
//     case 1:
//       'Monday'
//     case 2:
//       'Tuesday'
//     case 3:
//       'Wednesday'
//     case 4:
//       'Thursday'
//     case 5:
//       'Friday'
//     case 6:
//       'Saturday'
//     case 7:
//       'Sunday'
//     default:
//       console.log('Err. Something went wrong.')
//   }
// }

console.log(dayOfTheWeek(5)) // should log Friday


it('#Should return Monday with input 1', () => {
   expect(dayOfTheWeek(1)).to.equal('Monday')
})

it('#Should return Sunday with input 7', () => {
   expect(dayOfTheWeek(7)).to.equal('Sunday')
})
console.log(dayOfTheWeek(1)) // should log Monday
console.log(dayOfTheWeek(7)) // should log Sunday

/*----------------------------------------------------*/
console.log(`Test 1d: Only Wizzzzzards shall pass!`)
const movieCharacters1 = [
  {
    name: 'Howl',
    isAWizard1: true,
    quote: `You're wearing that hat? After all the magic I used to make your skirt pretty?`,
  },
  {
    name: 'Kalcifer',
    isAWizard1: false,
    quote: `I don't cook! I'm a scary and powerful fire demon!`,
  },
  {
    name: 'Gandalf',
    isAWizard1: true,
    quote: `You shall not pass! Not today, nor any other DAY!!!`,
  },
  {
    name: 'Luke Skywalker',
    isAWizard1: false,
    quote: `I AM the Force within you.`,
  },
]

function onlyWizards1(arrayOfCharacters1) {
  return arrayOfCharacters1.filter((character1) => character1.isAWizard1 == true)
  }

// 
//check out the console.table() method you can use on objects!
 console.table(onlyWizards1(movieCharacters1))

 for(let character1 of onlyWizards1(movieCharacters1)) {
     it('#Character should be a FreakIn Wizzzard', () => { 
       expect(character1.isAWizard).to.equal(true)
     })
}





/*----------------------------------------------------*/
console.log(`-----------Finished------------`)