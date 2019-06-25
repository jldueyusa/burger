var express = require("express");
var burger = require("../models/burger");

//router controllers. Build router connections that will manage database arrays and identify endpoints.

var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    router.post("/api/burgers", function(req, res){
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result){
                res.json({ id: result.insertId});
            }
        );
    });
});