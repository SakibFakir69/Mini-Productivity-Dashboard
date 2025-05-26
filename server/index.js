

require("dotenv").config();
const Express = require('express')
const App = Express();
const Port = process.env.PORT || 5000;
const Cors =  require('cors')


App.use(Cors())
App.use(Express.json())











