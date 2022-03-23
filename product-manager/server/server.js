const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'products_db';

// Middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}));

// DB connection
require('./config/mongoose.config')(DB);

// Routes
require('./routes/joke.routes')(app);

// Listen
app.listen(PORT, () => console.log('Express is listening!'))