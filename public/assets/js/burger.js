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
    });
});