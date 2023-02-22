import request from "supertest"
import { describe } from "mocha"

const server = require("../../../index")

describe("GET /people", function () {
  it("List all people", function (done) {
    request(server).get("/people").expect(200, done)
  })
})
