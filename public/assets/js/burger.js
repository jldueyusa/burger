//this file contains the ajax that calls all the onclick which triggers the actions
$(function(){

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        //this will create the new burger
        var newBurger = {
            burger_name: $("#newburger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        });
    });
    //add click event
    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            //this click event sets devoured to true
            devoured: 1
        }
    })
});