// const { Schema, model } = require("mongoose");
// use bcrypt for passwords? require
// require restaurant

// require any utils we may use here. Maybe something to create nice breaks in paragraphs? Pricing? who knows.

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true, //NOT a validator
        match: [/.+@.+\..+/, "Must match an email address!"],
        // regex, ensures it follows the pattern <string>@<string>.<string>
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        // max length?
    },
    name: {
        type: String,
        required: true,
    },
    restaurants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Restaurant",
        },
    ],
});

// // set up pre-save middleware to create password
// userSchema.pre("save", async function (next) {
//     if (this.isNew || this.isModified("password")) {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//     }

//     next();
// });

// // compare the incoming password with the hashed password
// userSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

const User = model("User", userSchema);

model.exports = User;
