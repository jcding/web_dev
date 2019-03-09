let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);

let guessColor = "rgb(" + r + ", " + g + ", " + b + ")";

let header = document.querySelector(".lead");
header.textContent = guessColor;

let colors = document.querySelectorAll("#colors");


let randoNum = Math.floor(Math.random()*6);
setColor(randoNum);

let restart = document.querySelector("#restart");
restart.addEventListener("click", function(){
    //reset color
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);

    guessColor = "rgb(" + r + ", " + g + ", " + b + ")";

    //reset randonum
    randoNum = Math.floor(Math.random()*6);

    //reset header
    restart = document.querySelector("#restart");
    header.textContent = guessColor;
    setColor(randoNum);

    //reset correctness_text
    correctness_text.textContent = " ";
})

let correctness_text = document.querySelector("#correctness_text");


function yeet(rando){
    colors[rando].addEventListener("click", function(){
        console.log(colors[rando].style.backgroundColor);
        console.log(guessColor);
        if(colors[rando].style.backgroundColor === guessColor){
            correctness_text.textContent = "Correct";
            for(i = 0; i < 6; i++){
                colors[i].style.backgroundColor = guessColor;
                colors[i].style.visibility = "visible";
            }
        }
        else{
            correctness_text.textContent = "Wrong";
            colors[rando].style.visibility = "hidden";
        }
        
    });
}

function setColor(rando){
    if(rando === 0){
        colors[0].style.backgroundColor = guessColor;
    
        yeet(0);
    }
    if(rando === 1){
        colors[1].style.backgroundColor = guessColor;
        
        yeet(1);
    }
    
    if(rando === 2){
        colors[2].style.backgroundColor = guessColor;
        yeet(2);
    }
    
    if(rando === 3){
        colors[3].style.backgroundColor = guessColor;
        yeet(3);
    }
    
    if(rando === 4){
        colors[4].style.backgroundColor = guessColor;
        yeet(4);
    }
    
    if(rando === 5){
        colors[5].style.backgroundColor = guessColor;
        yeet(5);
    }

    // set all the other colors
    for(i = 0; i < 6 ; i++){
        if(i != rando){

            let r2 = Math.floor(Math.random()*256);
            let g2 = Math.floor(Math.random()*256);
            let b2 = Math.floor(Math.random()*256);

            let otherColor = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";

            colors[i].style.backgroundColor = otherColor;
            yeet(i);
            
        }
    }
}





