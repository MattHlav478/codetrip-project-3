const { Schema } = require('mongoose');

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    image: {
        type: Image,
        required: false,
    },
});

module.exports = menuSchema;
