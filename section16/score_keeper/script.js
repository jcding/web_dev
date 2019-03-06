let p1score = 0;
let p2score = 0;

let player1score = document.getElementById("p1");
let player2score = document.getElementById("p2");
let reset = document.getElementById("reset");
let left = document.getElementById("left");
let right = document.getElementById("right");
let max_text = document.getElementById("max");
let max = 5;

let input = document.querySelector("input");

let gameOver = false;


input.addEventListener("change", function(){
    max = Number(document.querySelector("input").value);
    max_text.textContent = max;
    resetGame();

})

player1score.addEventListener("click", function(){
    if(!gameOver){
        p1score++;
        if(p1score === max){
            gameOver = true;
            left.classList.add("winner");
        }
    }
    left.textContent = p1score;
    
        
    
    

})


player2score.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        if(p2score === max){
            gameOver = true;
            right.classList.add("winner");
        }
    }
    right.textContent = p2score;
})

reset.addEventListener("click", function(){
    resetGame();
})


function resetGame(){
    p1score = 0;
    p2score = 0;
    left.textContent = p1score;
    right.textContent = p2score;
    gameOver = false;
    left.classList.remove("winner");
    right.classList.remove("winner");
}



