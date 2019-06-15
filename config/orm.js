var connection = require("../config/connection");

var orm = {
    selectALL: function(table, cb){
        var dbQuery = "SELECT * FROM" + table + ";";
        connection.query(dbQuery, function(err, res){
            if (err) {
                throw err;
            }
            cb(res);
        })
    }
};