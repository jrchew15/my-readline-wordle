const readline = require('readline');

let counter = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkGuess(solution, guess) {
    guess = guess.toUpperCase();
    let feedback = [, , , ,]; let solutionArr = solution.split('');
    for (let i = 0; i < 5; i++) {
        if (guess[i] === solution[i]) { feedback[i] = '$'; solutionArr.splice(i, 1) }
    }
    for (let j = 0; j < 5; j++) {
        if (!feedback[j] && solutionArr.includes(guess[j])) { feedback[j] = '*' }
        else if (!feedback[j]) { feedback[j] = '_' }
    }
    return feedback;
}

const recursiveCheckGuess = (solution, guess) {
    counter++;
    let feedback = checkGuess(solution, guess);
    // Display full results later
    console.log(`   Guess: ${guess}, \nFeedback: ${feedback.join('')}`)
    if (feedback.every(ele => ele === '$')) { console.log('You Won!'); rl.close() }
    else if (counter >= 6) { console.log('You lose \nTry again!'); rl.close() }
    else { rl.question('Guess a word: ', (guess) => recursiveCheckGuess(solution, guess)) }
}
