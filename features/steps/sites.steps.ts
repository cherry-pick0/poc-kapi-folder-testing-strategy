import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
const feature = loadFeature("features/sites.feature")
const app = require("../../index")

defineFeature(feature, (test) => {
  let sitesList, site = null

  test("Get sites", ({ when, then }) => {
    when("we get a list of sites", async () => {
      const response = await request(app).get("/sites")
      sitesList = response.body
    })

    then("we should receive", (table) => {
      expect(Array.isArray(sitesList)).toBeTruthy()
      expect(sitesList.length).toBeGreaterThan(0)
      site = sitesList[0]
      expect(table[0]).toHaveProperty("id")
      expect(table[0]).toHaveProperty("name")
      expect(table[0]).toHaveProperty("displayName")
      expect(table[0]).toHaveProperty("status")
    })
  })

  test("Clear cache", ({ given, when, then }) => {
    given("the site exists", () => {
      expect(site).toBeDefined()
    })

    when("we clear cache", () => {
      return "pending"
    })

    then("we should receive", (docString) => {})
  })

  test("Restart PHP engine", ({ given, when, then }) => {
    given("the site exists", () => {})

    when("we restart PHP engine", () => {})

    then("we should receive", (docString) => {})
  })
})
