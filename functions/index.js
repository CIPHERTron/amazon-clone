const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")(
	"sk_test_51Ik5dOSGm7zaQ1rAYCFVbGe2R7Q1PtaY0E822aQ747odBZwq5rTPZV048qKzdfHQaAQatnfvcye7GzdtgmzOjfFb00TqCWJRaM"
)
