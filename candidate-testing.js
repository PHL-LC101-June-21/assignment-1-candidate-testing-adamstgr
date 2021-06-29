const input = require('readline-sync');

let candidateName = "";
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];

function askForName(candidateName) {
  candidateName = input.question("What is your name? ");
  console.log(`Candidate Name: ${candidateName}`);
}

function askQuestion(candidateAnswer) {
  console.log('');
  for (i = 0; i < 5; i++) {
    let strCandidateAnswers = input.question(`${i + 1}) ${questions[i]} `);
    candidateAnswers.push(strCandidateAnswers);
    console.log(`Your Answer: ${candidateAnswers[i]} 
Correct Answer: ${correctAnswers[i]}
`);
    }
}



function gradeQuiz(candidateAnswers) {
  let grade = 0;
  for (let i = 0; i < 5; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      grade = grade + 20;
    }
  }
  console.log(`>>> Overall Grade: ${grade}% (${grade/20} of 5 responses correct) <<<`);
  if (grade >= 80) {
    console.log(`>>> Status: PASSED <<<`);
    } else {
    console.log(`>>> Status: FAILED <<<`);
    }




  

  return grade;

}
function runProgram() {
  askForName();

  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};