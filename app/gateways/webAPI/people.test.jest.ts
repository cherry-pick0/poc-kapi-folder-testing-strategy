import request from "supertest"

const app = require("../../../index")

describe("People test flow", () => {
  it("tests /people endpoint", async () => {
    const response = await request(app).get("/people")
    expect(response.statusCode).toBe(200)
  })
})
