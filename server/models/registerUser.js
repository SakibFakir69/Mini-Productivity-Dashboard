
const mongooes = require('mongoose');







const register_user_schema = new mongooes.Schema({

    name:{
        type : String,
        required: true,
    },
    email: {
        type : String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,

    }
},{
    timestamps: true
})

module.exports =mongooes.model("User",register_user_schema);
// User is a collection 





