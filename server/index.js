

require("dotenv").config();
const express = require('express');

const {connectionTo_mongoDB} = require('./DB/connectionDB');

connectionTo_mongoDB(process.env.mongoBD_password,
    {
        useNewUrlParser: true,
  useUnifiedTopology: true,
    }
)
.then(()=> console.log("DB connected"))
.catch(()=> console.log("DB connected failed"))


const app = express();

const port = process.env.PORT ||5000;

const register_user_schema = require('./models/registerUser');





// login


























app.get('/', async (req,res)=>{
    
    res.send('Hurray i am running')

} )

app.listen(port,()=> console.log(`MY  server on port ${port}`))













