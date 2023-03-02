import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
const feature = loadFeature("features/sites.feature")
const app = require("../../index")

defineFeature(feature, (test) => {
  let sitesList = []
  let site = { id: null }

  test("Get sites", ({ when, then }) => {
    when("we get a list of sites", async () => {
      const response = await request(app).get("/sites")
      expect(response.status).toBe(200)
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
    let responseData: any

    given("the site exists", () => {
      expect(site.id).toBeDefined()
    })

    when("we clear cache", async () => {
      const response = await request(app).put(
        "/sites/" + site.id + "/clear_cache"
      )
      expect(response.status).toBe(200)
      responseData = response.body
    })

    then("we should receive", (docString) => {
      let expected = JSON.parse(docString)
      expect(responseData).toMatchObject(expected)
    })
  })

  test("Restart PHP engine", ({ given, when, then }) => {
    let responseData: any

    given("the site exists", () => {
      expect(site.id).toBeDefined()
    })

    when("we restart PHP engine", async () => {
      const response = await request(app).put(
        "/sites/" + site.id + "/restart_php_engine"
      )
      expect(response.status).toBe(200)
      responseData = response.body
    })

    then("we should receive", (docString) => {
      let expected = JSON.parse(docString)
      expect(responseData).toMatchObject(expected)
    })
  })
})
