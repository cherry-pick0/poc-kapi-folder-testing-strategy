import request from "supertest"

const app = require("../../../index")

describe("People test flow", () => {
  it("tests /people endpoint", async () => {
    const response = await request(app).get("/people")
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeGreaterThanOrEqual(1)
    expect(typeof response.body[0]).toBe('object')
    expect(response.body[0]).toHaveProperty('id')
    expect(response.body[0]).toHaveProperty('name')
  })
})
