

require("dotenv").config();
const express = require('express');

const { connectionTo_mongoDB } = require('./DB/connectionDB');

connectionTo_mongoDB(process.env.mongoBD_password,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then(() => console.log("DB connected"))
    .catch(() => console.log("DB connected failed"))


const app = express();

const port = process.env.PORT || 5000;

const register_user_schema = require('./models/registerUser');




app.post('/api/register', async (req, res) => {

    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        //    user check

        const exitUser = await register_user_schema.findOne({ email });

        if (exitUser) {
            res.status(400).json({ message: 'User already exists with this email' })
        }

        const newUser = new register_user_schema({ name, email, password });
        await newUser.save();


        //    message
        res.status(201).json({ message: 'User registered successfully' })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error. Try again later.' })
    }



})


























app.get('/', async (req, res) => {

    res.send('Hurray i am running')

})

app.listen(port, () => console.log(`MY  server on port ${port}`))













