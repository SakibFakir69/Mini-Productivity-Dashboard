

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
const jwt = require('jsonwebtoken');
const port = process.env.PORT || 5000;

const register_user_schema = require('./models/registerUser');
const tasksUser = require('./models/Tasks')


app.use(cors({
    origin: "http://localhost:5173",
   methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],

    credentials: true, // if you use cookies or authentication headers
}));


app.use(express.json());


// jwt

// procted

const privateRoute = (req,res,next)=>{

    const token = req.header('Authorization')?.split(' ')[1];
    if(!token)
    {
        return res.status(401).json({message:'not token, authorization denied'})
    }

    try{
        const decode  = jwt.verify(token,  process.env.JWT_SECRET || 'secretkey');
        req.user=decode;
        next();
    }catch(err){
        res.status(401).json({message:"Token is not valid"})
    }

}


// JWT-based registration (NO password hashing)
app.post('/api/register-jwt', async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name,email , password);

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const isUserExists = await register_user_schema.findOne({ email });
    if (isUserExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create new user (plain password)
    const newUser = new register_user_schema({ name, email, password });
    await newUser.save();

    // Create JWT token
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '24h' }
    );

    console.log("token",token);
    // Return token and email
    res.status(201).json({ token, email });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Try again later.' });
  }
});

// login-jwt




app.post('/api/login-jwt', async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await register_user_schema.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    // No password hashing used, compare plain-text
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'secretkey',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, email: user.email });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});













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













