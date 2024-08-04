const max = prompt("Enter Max length of number");
const num = Math.floor(Math.random()*10)+1;
let guess = prompt("Guess the number");
while(true){
    if (guess == "quit"){
        console.log("You are quit.");
        break;
    }
    else if (guess == num){
      console.log("Congratulation! you guess this number.");
        break;
    }
    else if (guess < num){
        guess = prompt("your number is smaller. Please try again.");
    }
    else (guess > num)
    {
        guess = prompt("your number is greater. Please try again.");
    }
    // guess = prompt("Guess the number");
}