

require("dotenv").config();
const express = require('express');

const cors = require('cors')
const axios = require('axios');
const { connectionTo_mongoDB } = require('./DB/connectionDB');

connectionTo_mongoDB(process.env.MONGO_URI,
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
const tasksUser = require('./models/Tasks')


app.use(cors({
    origin: "http://localhost:5173",
   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

    credentials: true, // if you use cookies or authentication headers
}));


app.use(express.json());

app.post('/api/register', async (req, res) => {

    const user = req.body;
    const { name, email, password } = user;
    console.log(user);

    try {

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' })
        }

        //    user check

        const exitUser = await register_user_schema.findOne({ email });

        if (exitUser) {
            return res.status(400).json({ message: 'User already exists with this email' })
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

// user get 

app.get('/api/alluser', async (req, res) => {

    try {

        const user = await register_user_schema.find();

        res.status(200).json(user);
    } catch (error) {

        res.status(500).json({ message: 'Internal server error' })
    }


})

// quote 
app.get('/api/quotes', async (req, res) => {
    try {
        const response = await axios.get('https://zenquotes.io/api/quotes');
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch quotes' });
    }
});
// task add api

app.post('/api/tasks', async (req, res) => {

    try {
        const data = req.body;
        console.log(data);

        const newTask = new tasksUser(data);
        await newTask.save();

        res.status(201).json({ message: 'Post added' })
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal Server error' })


    }

})

// show tasks

app.get('/api/tasks/:email', async (req, res) => {

    const userEmail = req.params.email;
    console.log(userEmail);

    try {
        const task = await tasksUser.find({ email: userEmail });
        res.status(200).json(task);
    } catch (err) {
        console.log(err.message);

        res.status(500).json({ message: 'Internal server error' });
    }


})

app.patch("/api/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { iscompleted } = req.body;

    try {
        const result = await tasksUser.findByIdAndUpdate(
            id,
            { iscompleted },
            { new: true }
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to update task status" });
    }
});


// delete post

app.delete('/api/tasks/:id',async(req,res)=>{
    const id = req.params.id;

    try{
        const deleteTask = await tasksUser.findByIdAndDelete(id);
        res.status(200).json({message:'Task deleted'})
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Internal server error'})
    }

})
// edit

app.patch('/api/tasksedit/:id', async(req , res)=>{
    const id = req.params.id;
    const task = req.body;

    const result = await tasksUser.findByIdAndUpdate(id, task);
    res.status(200).json(result);
    res.send(result);


})



















app.get('/', async (req, res) => {

    res.send('Hurray i am running')

})

app.listen(port, () => console.log(`MY  server on port ${port}`))













