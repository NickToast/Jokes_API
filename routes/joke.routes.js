const jokeController = require('../controllers/joke.controller')

module.exports = app => {
    app.get('/api/jokes', jokeController.allJokes);
    app.get('/api/jokes/random', jokeController.randomJoke); //make sure this is above any routes that have parameters or else it will put random into the :id
    app.get('/api/jokes/:id', jokeController.oneJoke);
    app.post('/api/jokes', jokeController.newJoke);
    app.patch('/api/jokes/:id', jokeController.updateJoke);
    app.delete('/api/jokes/:id', jokeController.deleteJoke);
}