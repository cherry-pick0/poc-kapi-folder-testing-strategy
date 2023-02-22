import request from "supertest"

const app = require("../../../index")

it("Sign up success", (done) => {
  request(app)
    .get("/people")
    .then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
    .catch((error) => {
      console.log("error - ")
      console.log(error)
    })
})
