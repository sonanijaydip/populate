var mongoose = require('mongoose')

var categoryschema = new mongoose.Schema({

    c_name:{
        type:String
    }
    
});
module.exports = mongoose.model('category',categoryschema)