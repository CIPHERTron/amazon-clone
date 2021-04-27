/* eslint-disable no-unused-vars */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51Ik5dOSGm7zaQ1rAYCFVbGe2R7Q1PtaY0E822aQ747odBZwq5rTPZV048qKzdfHQaAQatnfvcye7GzdtgmzOjfFb00TqCWJRaM"
);

// initialize app
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// routes
app.get("/", (req, res) => res.status(200).send("Home route"));

// Run server
exports.api = functions.https.onRequest(app);

// Base URL: http://localhost:5001/clone-2d395/us-central1/api
