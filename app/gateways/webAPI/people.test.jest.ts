import request from "supertest"

const app = require("../../../index")

describe("People test flow", () => {
  let personID = undefined

  it("tests GET /people endpoint", async () => {
    const response = await request(app).get("/people")
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeGreaterThanOrEqual(1)
    expect(typeof response.body[0]).toBe("object")
    expect(response.body[0]).toHaveProperty("id")
    expect(response.body[0]).toHaveProperty("name")
  })

  it("tests POST /people endpoint", async () => {
    const data = { name: "Rick" }
    const response = await request(app).post("/people", data)
    expect(response.statusCode).toBe(201)
    expect(typeof response.body).toBe("object")
    expect(response.body).toHaveProperty("id")
    expect(response.body).toHaveProperty("name")
    expect(response.body).toHaveProperty("email_address")
    expect(response.body["name"]).toBe("Rick")
    personID = response.body["id"]
  })

  it("tests GET /people/:id endpoint", async () => {
    const response = await request(app).get("/people/" + personID)
    expect(response.statusCode).toBe(200)
    expect(typeof response.body).toBe("object")
    expect(response.body).toHaveProperty("id")
    expect(response.body).toHaveProperty("name")
    expect(response.body["name"]).toBe("Rick")
  })

  it("tests DELETE /people/:id endpoint", async () => {
    const response = await request(app).delete("/people/" + personID)
    expect(response.statusCode).toBe(204)

    const response2 = await request(app).get("/people/" + personID)
    expect(response2.statusCode).toBe(404)
  })
})
