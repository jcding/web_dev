let age = prompt("what is your age");


let out = age * 365;
alert("you have been alive for " + out + " days");




function kebabToSnake(input){
    let output = input.replace(/-/g, "_");
    return output;
}