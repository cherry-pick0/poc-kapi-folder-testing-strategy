import express, { json } from "express"
import routes from "./app/gateways/webAPI"

var app = express()
app.use(json())
app.use(routes)

app.listen(4000)
console.log("Running a server at http://localhost:4000")

module.exports = app; // for mocha testing