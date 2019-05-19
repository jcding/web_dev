$("ul").on("click", "li", function(){
    // $(this).css("color", "gray");
    // $(this).css("text-decoration", "line-through");

    //if li is gray, turn it black, else turn it gray
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
        
    // }
    // else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass('completed');
    
    
});


$("ul").on("click", "span", function(event){
    // stop propagation: stops event from bubbling up to li listener
    event.stopPropagation();
    $(this).parent().slideToggle("slow", function(){
        $(this).remove();
    })
})

// $("input").keypress(function(event){
//     if(event.which === 13){
//         alert("you hit ENTER: ");
//     }
//     console.log(event);
// });
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //console.log($(this).val());
        $("ul").append("<li> <span><i class='far fa-trash-alt'></i></span> " + todoText +"</li>");
    }

})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})