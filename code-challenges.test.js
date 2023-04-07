// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//Note: On previous assesments I had pseudocode for the tests
//we were told we didn't have to so moving forward I will not
//psuedocode tests
describe('fibonacci', () => {
  it('takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence', () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

  })
})


// b) Create the function that makes the test pass.
//create a function named fibonacci that takes a number as a parameter
const fibonacci = (number) => {
  //The number passed must be greater than 2
  if (number>2){
    //create a variable named sequence that holds two numbers [1, 1]
    //that begins our fibonacci sequence
    sequence=[1, 1]
    //create a loop with variable i starting at the number 1 and will
    //increment positively until it reaches the number minus 1
    for(i=1; i<number-1; i++){
      //<sequence[i-1]> is the position of the previous number in the array "sequence"
      //<sequence[i]> is the position of the current number in the array "sequence"
      //We add these two numbers and use the .push() method to attach these numbers
      //to the end of the "sequence" array until the loop ends
      sequence.push(sequence[i-1] + sequence[i])
    }
  } else {
    //If a value other than a number greater than 2 was passed as an argument the following will trigger
    return 'Something went wrong'
  }
  //return the fibonacci sequence the length of the number passed
   return sequence
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.
describe("leastGreatest", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    // Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    // Expected output: [10, 15, 20, 45, 60, 65, 100]

    expect(leastGreatest(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastGreatest(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})


// b) Create the function that makes the test pass.
//create a function named leastGreatest that takes an object as a parameter
const leastGreatest = (object) => {
  //create a variable named sortedNumbers that hold the value of the 
  //objects value using Object.values()
  //sort the numbers in ascending order using the .sort method
  //within the .sort() method we need to distinguish that we want
  //the numbers in asending order so we assign variables a and b
  //we place a before b to get the ascending values.
  let sortedNumbers = Object.values(object).sort((a,b)=>a-b)
  //return all of the sorted numbers
  return sortedNumbers
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
describe('accSum', () => {
  it('takes in an array and returns an array of the accumulating sum. An empty array should return an empty array', () => {

    const accountTransactions1 = [100, -17, -23, -9]
    // Expected output: [100, 83, 60, 51]
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]
    const accountTransactions3 = []
    // Expected output: []

    expect(accSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accSum(accountTransactions3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.
//create a function named accSum that takes an array as a parameter
const accSum = (array) => {
  //create a variable named sum that will be used for for holding sum value
  let sum = 0
  //if the array is empty return an empty string
  if(array.length===0){
    return []
    //if the array is not empty use .map() method to iterate through the 
    //array. the sum variable starts at 0 and recieves a new value after
    //adding/subtracting the value, that number is placed into a separate
    //array. once it is done we return that separate array with values that
    // have been accumulatively summated ---> hope those are real words I want to sound fancy
  } else if (array.length>0){
    return array.map((value) => sum += value)
  } else {
    //if all else fails then I have failed
    return 'I have failed you'
  }
}