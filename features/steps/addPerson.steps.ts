import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
import { Person } from "../../domain/entities/Person"

const app = require("../../index.ts")
const feature = loadFeature("features/addPerson.feature")

defineFeature(feature, (test) => {
  let person: Person = { name: "" }

  test("Add person", ({ given, when, then }) => {
    when("we create a person", async () => {
      const data = { name: "Rick" }
      const response = await request(app).post("/people", () => data)
      person = response.body
    })

    then("we should receive", (expectedData: string) => {
      let expected = JSON.parse(expectedData)
      expect(expected["name"]).toBe(person.name)
    })
  })
})
