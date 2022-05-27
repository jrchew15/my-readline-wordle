function checkGuess(solution, guess) {
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

let sol = 'CAGED'; let guess = 'GALAS'
console.log(`Solution: ${sol}, \n   Guess: ${guess}, \nFeedback: ${checkGuess(sol, guess).join('')}`)
