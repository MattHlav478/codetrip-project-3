const functions = require("firebase-functions");
const express = require('express')

const admin = require('firebase-admin')

// set up express cloud function
const app = express();

exports.graphsql = functions.https.onRequest(app);

console.log('functions say hi!')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
