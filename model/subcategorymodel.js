var mongoose = require('mongoose')

var subcatogeryschema = new mongoose.Schema({

    s_name:{
        type:String
    },
    c_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }
    
});

module.exports = mongoose.model('category',subcatogeryschema)