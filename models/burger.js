var orm = require("../config/orm");

var burger = {
    // call back all the ORMs
    selectAll: function(cb){
orm.selectAll("burgers", function(res){
    cb(res);
});
    }
    insertOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    }
    updateOne: function(cols, vals, cb) {
        orm.selectAll("burgers", cols, vals, function(res){
            cb(res);
        });
    }

};
module.exports = burger;
