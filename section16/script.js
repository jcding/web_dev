let button = document.querySelector('button');


let white = true;

// button.addEventListener("click", function(){
//     if(white){
//         document.body.style.background = "pink";
//     }
//     else{
//         document.body.style.background = "white";
//     }
//     white = !white;
    
// });

button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
    
});
