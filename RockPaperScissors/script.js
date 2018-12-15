let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function convertTwoWords(letter){
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissors";
}


function win(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertTwoWords(userChoice)}${smallUserWord} beats ${convertTwoWords(computerChoice)}${smallCompWord} . You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertTwoWords(userChoice)}${smallUserWord} loses to ${convertTwoWords(computerChoice)}${smallCompWord} . You lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice){
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertTwoWords(userChoice)}${smallUserWord} equals ${convertTwoWords(computerChoice)}${smallCompWord} . It's draw! Try it again!`;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() { userChoice_div.classList.remove('grey-glow') }, 300);
}

function Game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'ps':
        case 'rp':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        Game('r');
    })
    
    paper_div.addEventListener('click', function(){
        Game('p');
    })
    
    scissors_div.addEventListener('click', function(){
        Game('s');
    })
}

main();































