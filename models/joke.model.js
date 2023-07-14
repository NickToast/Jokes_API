const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Type in a joke!"],
        minlength: [2, "Joke must be at least 2 character"]
    },
    punchline: {
        type: String,
        required: [true, "Type in the punchline!"],
        minlength: [2, "Punchline must be at least 2 character"]
    }
})

const Joke = mongoose.model('Joke', JokeSchema)

module.exports = Joke