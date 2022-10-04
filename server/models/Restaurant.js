const { Schema, model } = require("mongoose");
const menuSchema = require("./Menu");

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
        // regex
        // min length? not necessary?
    },
    address: {
        type: String,
        required: true,
    },
    // hours:{an array, of }
    menu: [menuSchema],
    aboutMe: {
        type: String,
    },
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
