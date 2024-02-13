// var input1 = document.querySelector("#fst-input");
var clickedbtn = document.querySelector("#button");
var container = document.querySelector(".container-selector");


clickedbtn.addEventListener("click", sum);

function print(i){

    setTimeout(function(){
       
        container.innerHTML += "<div class='child'> <h1>" + i +"</h1> </div>";
    },100*i);
    
}


function sum(){
    
    container.classList.add("grid-container", "container")

    for(let i = 1; i<=100; i++){
        print(i);
    }
    


}