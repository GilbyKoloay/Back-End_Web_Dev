const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('users', usersSchema);
