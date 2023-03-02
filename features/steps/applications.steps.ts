import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
import { app, server } from "../../index"
const feature = loadFeature("features/applications.feature")

defineFeature(feature, (test) => {
  afterAll(async () => {
    server.close()
  })

  let applicationsList = []

  test("Get applications", ({ when, then }) => {
    when("we get a list of applications", async () => {
      const response = await request(app).get("/applications")
      applicationsList = response.body
    })

    then("we should receive", (table) => {
      expect(Array.isArray(table)).toBeTruthy()
      expect(table[0]).toHaveProperty("id")
      expect(table[0]).toHaveProperty("name")
      expect(table[0]).toHaveProperty("displayName")
      expect(table[0]).toHaveProperty("status")
    })
  })

  test("Clear cache", ({ given, when, then }) => {
    given("the site exists", () => {})

    when("we clear cache", () => {})

    then("we should receive", (docString) => {})
  })

  test("Restart PHP engine", ({ given, when, then }) => {
    given("the site exists", () => {})

    when("we restart PHP engine", () => {})

    then("we should receive", (docString) => {})
  })
})
