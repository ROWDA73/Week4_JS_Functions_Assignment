/*
Task 1: Library Late Fee Calculator 🚀🚀🚀🚀

You are working at a library and need to calculate late 
fees for overdue books. Write a function called `calculateLateFee` 
that takes the number of overdue days as input and calculates 
the fee ($0.25 per day). Prompt the user to input the
number of overdue days.

Log the result as:

"The late fee is $[amount]."

Example:
User Input: 10
Output: "The late fee is $2.50."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function calculateLateFee(){
   let overdueDays = prompt("Enter the number of overdue days:");
   overdueDays = Number(overdueDays);

   let fee = overdueDays * 0.25;
   console.log(`The late fee is ${fee.toFixed(2)}.`);
 }
 
 calculateLateFee();
 



// Extra Task:
// - Convert the function into a function expression.
const calculateLateFee1 = function (){
   let overdueDays = prompt("Enter the number of overdue days:");
   overdueDays = Number(overdueDays);

   let fee = overdueDays * 0.25;
   console.log(`The late fee is ${fee.toFixed(2)}.`);
}
calculateLateFee1();
/*
Task 2 : Favorite Color Finder 🚀🚀🚀🚀

You are designing a game that asks players for their favorite color. 
Write a function called `findColorMeaning` that takes a color as input 
(prompt the user) and logs the following meanings:

- "Blue: You love calm and peace."
- "Red: You are passionate and bold."
- "Green: You are connected to nature."
- "Yellow: You radiate happiness and energy."
- For any other color: "That's a unique choice!"

Example:
User Input: "Red"
Output: "Red: You are passionate and bold."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️
function findColorMeaning () {
  let color = prompt("What is your favorite color?");

  if (color === "Blue") {
    console.log("Blue: You love calm and peace.");
  } else if (color === "Red") {
    console.log("Red: You are passionate and bold.");
  } else if (color === "Green") {
    console.log("Green: You are connected to nature.");
  } else if (color === "Yellow") {
    console.log("Yellow: You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
};

findColorMeaning();

 

// Extra Task:
// - Rewrite the function using an arrow function.
const findColorMeaning1 =() => {
  let color = prompt("What is your favorite color?");

  if (color === "blue") {
    console.log("Blue: You love calm and peace.");
  } else if (color === "red") {
    console.log("Red: You are passionate and bold.");
  } else if (color === "green") {
    console.log("Green: You are connected to nature.");
  } else if (color === "yellow") {
    console.log("Yellow: You radiate happiness and energy.");
  } else {
    console.log("That's a unique choice!");
  }
};



/*
Task 3 : Lawyer's Case Log 🚀🚀🚀🚀

You’re a lawyer, and you’ve been assigned to organize your case files. 
Write a function called `logCase` that takes the client's name and 
the case number as parameters. For each case, log:

"Case #[caseNumber]: [clientName]'s case is now logged."

Example:
Input: logCase("John Doe", 12345)
Output: "Case #12345: John Doe's case is now logged."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function logCase(clientName, caseNumber) {
  console.log("Case " + caseNumber + ": " + clientName + " case is now logged.");
}
logCase("John Doe", 12345);



// Extra Task:
// - Rewrite the function as an arrow function.

const logCase1 = (clientName, caseNumber) => {
  console.log(`Case ${caseNumber}: ${clientName}' case is now logged.`);
};

logCase1("John Doe", 12345);


/*
Task 4 : Attendance Tracker 🚀🚀🚀🚀

You’re a teacher tracking student attendance. Write a function called 
`markAttendance` that takes a student’s name and a boolean `isPresent` 
value. If the student is present, log:

"[studentName] is present."

If the student is absent, log:

"[studentName] is absent."

Example:
Input: markAttendance("Amina", true)
Output: "Amina is present."
*/

// ✍️ ✍️ ✍️ ✍️ Write the function here ✍️ ✍️ ✍️ ✍️

function markAttendance(studentName, isPresent) {
  if (isPresent) {
    console.log(studentName + " is present.");
  } else {
    console.log(studentName + " is absent.");
  }
}

markAttendance("Amina", true);


// Extra Task:
// - Convert the function into a function expression.
const markAttendance1 = function(studentName,isPresent) {
  if (isPresent){
    console.log(studentName+ " is present.");
    
  }else{
    console.log(studentName+ " is absent.");
    
  }
}
markAttendance1("Amina", true);


/*
STRETCH TASK: Student Grade Report Generator 🏈🏈🏈🏈

You are a teacher, and you want to automate the creation of detailed grade reports for your class. Write a program that includes the following steps:

1. Write a function called `calculateAverage` that takes three test scores (numbers) as parameters and returns the average of those scores.

}
2. Write another function called `determineGrade` that takes the average score as a parameter and returns the letter grade based on the following rules:
   - "A" for average scores of 90 and above
   - "B" for scores between 80 and 89
   - "C" for scores between 70 and 79
   - "F" for scores below 70

3. Write a third function called `generateReport` that:
   - Takes a student's name and three test scores as parameters.
   - Uses `calculateAverage` to calculate the average score.
   - Uses `determineGrade` to find the letter grade.
   - Returns a full report string in this format:
     "[StudentName] - Average Score: [average], Grade: [letterGrade]"

4. Finally, use the `prompt` function to input the student’s name and three test scores, and display the generated report using `console.log`.

Example:
User Input:
Name: Amina
Scores: 85, 90, 78

Output:
"Amina - Average Score: 84.33, Grade: B"

Extra Credit:
- Extend the program to accept multiple students' names and scores and generate a report for each student using a loop.
- Use an arrow function for at least one of the functions.
*/
// 1. Calculate average of three scores
function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

// 2. Determine grade based on average
function determineGrade(average) {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else {
    return "F";
  }
}

function generateReport(studentName, score1, score2, score3) {
  let average = calculateAverage(score1, score2, score3);
  let grade = determineGrade(average);
  console.log(`${studentName} + Average Score: ${average.toFixed(2)}, Grade: ${grade}`);
}

// prompt
const studentName = prompt("Enter the student's name:");
const score1 = Number(prompt("Enter first test score:"));
const score2 = Number(prompt("Enter second test score:"));
const score3 = Number(prompt("Enter third test score:"));

generateReport(studentName, score1, score2, score3);
