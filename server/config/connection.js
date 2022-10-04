const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// this is what we're going to do once we have it deployed

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/deep-thoughts', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// });

module.exports = mongoose.connection;
