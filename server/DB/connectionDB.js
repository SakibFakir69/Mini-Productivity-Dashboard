



const mongoes = require('mongoose');


const connectionTo_mongoDB = async (url)=>{

    if(url){

        mongoes.connect(url);
        console.log('MongoDB connected sucessfully')
    }






}

module.exports={  connectionTo_mongoDB } ;