let dice=0;
let total1 = 0;
let total2 = 0;

document.getElementById('ng').style.display = "none";
document.querySelector('.player1-turn').style.display = "block";
document.querySelector('.player2-turn').style.display = "block";


document.querySelector('#dice-image1').addEventListener('click',()=>{
    document.querySelector('#dice-image1').style.display = "none";
    document.querySelector('#dice-image2').style.display = "block";

    document.querySelector('.player1-turn').style.display = "block";
    dice1=Math.floor(Math.random() * 6 +1) ;
    if(dice1===1)
    total1=0;
    else
    total1=total1+dice1;

    if(total1 >= 30){
        document.getElementById('dice-image1').src = "win.jpg";
        document.getElementById('dice-image2').src = "lose.jpg";
        document.getElementById('ng').style.display = "block";
        document.querySelector('.current-score-player1').textContent = dice1;
        document.querySelector('.total-score-player1').textContent = total1;
        // document.querySelector('#dice-image1').style.display = "none";
        // document.querySelector('#dice-image2').style.display = "none";
        return;
    }
    else{
    displayScore1(dice1,total1);
    }
})

document.querySelector('#dice-image2').addEventListener('click',()=>{
    document.querySelector('#dice-image2').style.display = "none";
    document.querySelector('#dice-image1').style.display = "block";
    document.querySelector('.player2-turn').style.display = "block";
    dice2=Math.floor(Math.random() * 6 +1) ;
    if(dice2===1)
    total2=0;
    else
    total2=total2+dice2;
    if(total2 >= 30){
        document.querySelector('.current-score-player2').textContent = dice2;
        document.querySelector('.total-score-player2').textContent = total2;
        document.getElementById('dice-image2').src = "win.jpg";
        document.getElementById('dice-image1').src = "lose.jpg";
        document.getElementById('ng').style.display = "block";
        // document.querySelector('#dice-image2').style.display = "none";
        // document.querySelector('#dice-image1').style.display = "none";
        return;
    }
    else 
    displayScore2(dice2,total2);
  
})




function displayScore1(dice1,total1){

  
    
    document.querySelector('.current-score-player1').textContent = dice1;
    document.querySelector('.total-score-player1').textContent = total1;
    document.getElementById('dice-image1').src = `${dice1}.jpg`;
    
    
}
function displayScore2(dice2,total2){
    
    
    document.querySelector('.current-score-player2').textContent = dice2;
    document.querySelector('.total-score-player2').textContent = total2;
    document.getElementById('dice-image2').src = `${dice2}.jpg`;
    
    
   

}

document.getElementById('ng').addEventListener('click',()=>{

    location.reload();
})