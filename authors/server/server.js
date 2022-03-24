const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const DB = 'authors_db';

// Middleware
app.use(express.json(), cors(), express.urlencoded({extended:true}));

// DB connection
require('./config/mongoose.config')(DB);

// Routes
require('./routes/author.routes')(app);

// Listen
app.listen(PORT, () => console.log(`Express is listening on port ${PORT}!`))