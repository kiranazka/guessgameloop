/*2. Guessing Game (Using while loop )
Objective: Create a simple number guessing game where the user tries to guess a randomly
generated number between 1 and a specified maximum value using a predefined set of guesses.
Steps to Follow:
1. Set a maximum value: Create a variable to store the maximum value for the number
guessing game.
2. Generate a random number: Use Math.random() and Math.floor() to generate a
random number between 1 and the maximum value. Log this value to the console for
development purposes.
3. Track the guess status: Create a variable to track whether the user's guess is correct. Set
it to false initially.
4. Simulate user guesses: Use an array to store a series of predefined guesses.
5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
correct guess is made. 
6. Check the user's guess: Inside the loop, check if the current guess matches the random
number. Provide feedback if the guess is too high or too low.
 */
const maxValue=100;
const rendomNumber: Number = Math.floor(Math.random() * maxValue) + 1;
console.log(`rendomNumber ${rendomNumber}`);
let correctGuess: Boolean = false;
let currentGuess: Number[] = [55,88,64,90,48];
let num = 0;
while (!correctGuess && num < currentGuess.length){
    let userGuess = currentGuess[num];
    if(userGuess === rendomNumber){
        console.log(`Congrats you have gussed current number ${currentGuess}`);
        correctGuess = true;
    }else if(userGuess < rendomNumber)
    {
        console.log(`Try again! Your guess (${currentGuess}) is too low`)
    }else if(userGuess > rendomNumber)
    {
        console.log(`Try again! Your guess (${userGuess}`)
}

num++;
}
console.log(`The number was ${rendomNumber}`);