//some sources
// to get the app to interact with the fron queryselector method to return elements https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// innertext property https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText
//.textcontent https://www.w3schools.com/jsref/prop_node_textcontent.asp

const run = function() {
    let playerScore = 0;
    let computerScore = 0;

    var play = function() {
        
        const rBtn = document.querySelector('.rock');
        const pBtn = document.querySelector('.paper');
        const  sBtn = document.querySelector('.scissor');

        var computerChoice = Math.random()*3;
        if (computerChoice < 1.5) {
        	computerChoice = "rock";
        } else if(computerChoice <=3 ) {
    	  computerChoice = "paper";
        } else {
     	  computerChoice = "scissors";
        }
         
    }
    decider(this.innerText,computerChoice)
    // decider
    const decider = (player,computer) => {
        const results = document.querySelector('.results');
        const playerCount = document.querySelector('.playerCount');
        const computerCount = document.querySelector('.computerCount');
      
        if(player === computer){
            results.textContent = 'Tie'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                results.textContent = 'computer wins!';
                c-score++;
                computerCount.textContent = computerScore;
 
            }else{
                results.textContent = "player wins!"
                p-score++;
                playerCount.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                results.textContent = 'computer wins!';
                computerScore++;
                computerCount.textContent = computerScore;
            }else{
                results.textContent = "player wins!";
                playerScore++;
                playerCount.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                results.textContent = 'computer wins!';
                computerScore++;
                computerCount.textContent = computerScore;
            }else{
                results.textContent = "player wins!";
                playerScore++;
                playerCount.textContent = playerScore;
            }
        }
    }

    play();
     
}

run();

