let randomNumber=parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
 const submit=document.querySelector('#subt');
 const userInput=document.querySelector('#guessField');
 const guessSlot=document.querySelector('.guesses');
 const remaining=document.querySelector('.lastResult');
 const lowOrhi=document.querySelector('.lowOrhi');
 const startOver=document.querySelector('.resultParas');
 
 const p = document.createElement('p');
 let prevGuess= [];
 let numGuess=1;

 let playGame=true;

 if(playGame){
    submit.addEventListener('click',function(e){
          e.preventDefault();
          const guess=parseInt(userInput.value);
          console.log(guess);
          validateGuess(guess);
    })
 }

 function validateGuess(guess){
    if(isNaN(guess)){
      alert('Please enter a valid number')  
    }else if(guess<1){
        alert('Please enter a  number greater than 1')  
    }else if (guess>100){
        alert('please enter  a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11)
            {
                displayGuess(guess);
                displayMessage(`Game over.Random number was ${randomNumber}`)
                endGame();
            }else{
                displayGuess(guess);
                checkGuess(guess);
            }
    }
 }
 function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You Guesssed it right')
        endGame();
    }else if(guess < randomNumber)
    {
        displayMessage('number is TOOO LOW');
     }else if(guess > randomNumber)
    {
        displayMessage('Number is TOOO HIGH');
    }    
 }
function displayGuess(guess){
        userInput.value='';
        guessSlot.innerHTML += `${guess}; `;
        numGuess++; // Increment numGuess instead of newGuess
        remaining.innerHTML= `${11 - numGuess}`;
    }   
 function displayMessage(message){
    lowOrhi.innerHTML = `<h2>${message}</h2>`;
 }
 function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new Game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
 }
 function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    newGuess=1
    guessSlot.innerHTML ='';
    remaining.innerHTML= `${11- numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
    })
 }
 

