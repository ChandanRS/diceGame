let dice=0;
let total1 = 0;
let total2 = 0;
let newgameBtn = document.getElementById('new-game');
let playerOne = document.querySelector('.player1-turn');
let playerTwo = document.querySelector('.player2-turn')
// document.body.onload = alertFun;

function alertFun(){
    alert("The one who reaches 30 first wins.");   
}

// document.body.onload = addElement;
newgameBtn.style.display = "none";

// function addElement(){
//     const newdiv = document.createElement("div");
//     const newContent  = document.createTextNode("Player 1's turn")
//     newdiv.appendChild(newContent)
//     document.body.insertBefore(newdiv,cnt); 
// }



playerOne.addEventListener('click',()=>{
    playerOne.style.display = "none";
    // addElement();
    // playerOne.style.cursor = "none";
    playerTwo.style.display = "block";
    playerOne.style.display = "block";
    dice1=Math.floor(Math.random() * 6 +1) ;
    if(dice1===1)
    total1=0;
    else
    total1=total1+dice1;

    if(total1 >= 30){
        playerOne.src = "win.jpg";
        playerTwo.src = "lose.jpg";
        newgameBtn.style.display = "block";
        document.querySelector('.current-score-player1').textContent = dice1;
        document.querySelector('.total-score-player1').textContent = total1;
        return;
    }
    else{
    displayScore1(dice1,total1);
    }
})

playerTwo.addEventListener('click',()=>{
    playerTwo.style.display = "none";
    playerOne.style.display = "block";
    playerTwo.style.display = "block";
    dice2=Math.floor(Math.random() * 6 +1) ;
    if(dice2===1)
    total2=0;
    else
    total2=total2+dice2;
    if(total2 >= 30){
        document.querySelector('.current-score-player2').textContent = dice2;
        document.querySelector('.total-score-player2').textContent = total2;
        playerTwo.src = "win.jpg";
        playerOne.src = "lose.jpg";
        newgameBtn.style.display = "block";
       
        return;
    }
    else 
    displayScore2(dice2,total2);
  
})




function displayScore1(dice1,total1){

  
    
    document.querySelector('.current-score-player1').textContent = dice1;
    document.querySelector('.total-score-player1').textContent = total1;
    playerOne.src = `${dice1}.jpg`;
    
    
}
function displayScore2(dice2,total2){
    
    
    document.querySelector('.current-score-player2').textContent = dice2;
    document.querySelector('.total-score-player2').textContent = total2;
    playerTwo.src = `${dice2}.jpg`;
    
    
   

}

document.getElementById('new-game').addEventListener('click',()=>{

    location.reload();
})