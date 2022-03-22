const Joke = require('../controllers/jokes.controller');

module.exports = (app) => {
    app.get("/api/jokes", Joke.findAll);
    app.get("/api/jokes/random", Joke.findRandom);
    app.get("/api/jokes/:id", Joke.findOne);
    app.post("/api/jokes/new", Joke.create);
    app.put("/api/jokes/update/:id", Joke.update);
    app.delete("/api/jokes/delete/:id", Joke.delete);
}