const express = require('express')

require('dotenv').config()
require('./config/mongoose.config')

const app = express()
const port = process.env.PORT;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const routeAttacher = require('./routes/joke.routes')
routeAttacher(app)

app.listen(port,() => console.log(`>>RUNNING ON PORT: ${port}`));