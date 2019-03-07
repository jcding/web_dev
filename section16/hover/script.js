let list_items = document.querySelectorAll("li");




for(i = 0; i < list_items.length; i++){
    list_items[i].addEventListener("mouseover", function(){
        this.classList.add("red");
    })
    
    
    
    list_items[i].addEventListener("mouseout", function(){
        this.classList.remove("red");
    })
    list_items[i].addEventListener("click", function(){
        this.classList.toggle("crossout");
    })
}