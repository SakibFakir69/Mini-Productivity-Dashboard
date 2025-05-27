

const mongooes = require('mongoose'
)




const taskSchema = new mongooes.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        
    }
    ,
    frequency: {
    type: String,
    enum: ['Weekly', 'Monthly', 'None'],
    default: 'None',
  },
    iscompleted:{
    type:Boolean,
    default:false
    }
    ,
  createdAt:{
    type:Date,
    default:Date.now,
  },
  email:{
    type:String,
    required:true
  }


})

module.exports= mongooes.model('tasks',taskSchema);
