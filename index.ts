import express, { json } from "express"
import routes from "./app/gateways/webAPI"
import writeDocumentation from "./app/utils/openapi/writer"

let app = express()
app.use(json())
app.use(routes)

let server = app.listen(4000)

console.log("Running a server at http://localhost:4000")

writeDocumentation()

//module.exports = app, server // for testing
export {app, server}
