import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
import { Person } from "../../domain/entities/Person"

const app = require("../../index")

const feature = loadFeature("features/people.feature")

defineFeature(feature, (test) => {
  let personCreated: Person = { name: "" }
  let personById: Person = { name: "" }
  let peopleList: Person[] = []

  test("Add person", ({ given, when, then }) => {
    when("we create a person", async () => {
      const data = { name: "Rick" }
      const response = await request(app).post("/people", () => data)
      expect(response.status).toBe(201)
      personCreated = response.body
    })

    then("we should receive", (docString: string) => {
      let expected = JSON.parse(docString)
      expect(expected["name"]).toBe(personCreated.name)
    })
  })

  test("Get person", ({ when, then }) => {
    when("we get a person by ID", async () => {
      const response = await request(app).get("/people/" + personCreated.id)
      expect(response.status).toBe(200)
      personById = response.body
    })

    then("we should receive", (docString) => {
      let expected = JSON.parse(docString)
      expect(expected).toHaveProperty("id")
      expect(expected).toHaveProperty("name")
      expect(expected).toHaveProperty("email_address")
      expect(expected.name).toBe(personById.name)
    })
  })

  test("Get people", ({ when, then }) => {
    when("we get a list of people", async () => {
      const response = await request(app).get("/people")
      expect(response.status).toBe(200)
      peopleList = response.body
    })

    then("we should receive", (table) => {
      expect(Array.isArray(table)).toBeTruthy()
      expect(table[0]).toHaveProperty("id")
      expect(table[0]).toHaveProperty("name")
      expect(table[0]).toHaveProperty("email_address")
      expect(table[0]["name"]).toBe(peopleList[0]["name"])
    })
  })
})
