const express = require('express');
const app = express();
const PORT = 8000;
const DB = 'jokes_db';

// Middleware
app.use(express.json(), express.urlencoded({extended:true}));

// DB connection
require('./config/mongoose.config')(DB);

// Routes
require('./routes/joke.routes')(app);

// Listen
app.listen(PORT, () => console.log('Express is listening!'))