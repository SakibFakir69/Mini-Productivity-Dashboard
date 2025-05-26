
const mongoes = require('mongoose');







const register_user_schema = new mongoes.Schema({

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

module.exports =mongoes.model("User",register_user_schema);
// User is a collection 





