'use strict';
//document.querySelector('.message').textContent='correct number';
let score =20;
let secretNumber= Math.trunc(Math.random()*20)+1;
let highscore=0;
const displayMessage=function(message)
{ document.querySelector('.message').textContent=message;

}
//document.querySelector('.number').textContent=secretNumber;

document.querySelector('.check').addEventListener('click', function()
{const guess = Number(document.querySelector('.guess').value);
//console.log( guess ,typeof guess);

if(!guess){ //document.querySelector('.message').textContent='No number';
displayMessage='No number';
}

else if(guess === secretNumber)
{document.querySelector('.message').textContent='correct number';
document.querySelector('body').style.backgroundColor='#60b347'
document.querySelector('.number').style.width='30rem';
document.querySelector('.number').textContent=secretNumber;

if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
}


}
else if ( guess !==secretNumber){

    if (score > 1){document.querySelector('.message').textContent
   //displayMessage
    = guess>secretNumber ? 'Too high' : 'Too low'; 
    score--;
    document.querySelector('.score').textContent=score}
    else {displayMessage='you lost the game';
        //document.querySelector('.message').textContent='you lost the game';
    document.querySelector('.score').textContent=0;
    } 





}









/*
else if(guess > secretNumber)
{ if (score > 1){document.querySelector('.message').textContent='Too high'; score--;
document.querySelector('.score').textContent=score}
else {document.querySelector('.message').textContent='you lost the game';
document.querySelector('.score').textContent=0;
}  }

else if(guess < secretNumber)
{if (score > 1){document.querySelector('.message').textContent='Too low'; score--;
document.querySelector('.score').textContent=score}
else {document.querySelector('.message').textContent='you lost the game';
document.querySelector('.score').textContent=0;
} 
    
    
    //document.querySelector('.message').textContent='Too low'; score--;
//document.querySelector('.score').textContent=score
}*/


});

document.querySelector('.again').addEventListener('click',function(){


    let score=20;
    secretNumber= Math.trunc(Math.random()*20)+1;
     
    document.querySelector('.number').textContent='?';

    document.querySelector('.score').textContent=score;
   document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value="";
    document.querySelector('body').style.backgroundColor='#222';
    //document.querySelector('.message').textContent='start guessing';
    
displayMessage='start guessing';






//const secretNumber= Math.trunc(Math.random()*20)+1;

//document.querySelector('.number').textContent=secretNumber();
    
});
