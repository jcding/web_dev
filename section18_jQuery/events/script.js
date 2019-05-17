// $("h1").click(function(){
//     alert("h1 clicked");
// });

$("button").click(function(){
    $(this).css("background", "pink");
    var text = $(this).text();
    alert("you clicked the button: "+ text);
});


$("input").keypress(function(event){
    if(event.which === 13){
        alert("you hit ENTER");
    }
    console.log(event);
});

$("h1").on("click", function(){
    $(this).css("color", "purple");
});

$("button").on("mouseenter", function(){
    $(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function(){
    $(this).css("font-weight", "normal");
})

