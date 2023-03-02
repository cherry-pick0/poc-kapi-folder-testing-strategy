import request from "supertest"
import { loadFeature, defineFeature } from "jest-cucumber"
const feature = loadFeature("features/applications.feature")
const app = require("../../index")

defineFeature(feature, (test) => {
  test("Get applications", ({ when, then }) => {
    let applicationsList = []
    let application = { id: null }
    when("we get a list of applications", async () => {
      const response = await request(app).get("/applications")
      expect(response.status).toBe(200)
      applicationsList = response.body
    })

    then("we should receive", (table) => {
      expect(Array.isArray(applicationsList)).toBeTruthy()
      expect(applicationsList.length).toBeGreaterThan(0)
      application = applicationsList[0]
      expect(table[0]).toHaveProperty("id")
      expect(table[0]).toHaveProperty("name")
      expect(table[0]).toHaveProperty("displayName")
      expect(table[0]).toHaveProperty("status")
      expect(table[0]).toHaveProperty("deployments")
    })
  })

  test("Get applications by name", ({ given, when, then }) => {
    let applicationListByName = []
    given("I have the following applications", async (table) => {
      const response = await request(app).get("/applications")
      expect(response.status).toBe(200)
      expect(table).toMatchObject(response.body)
    })

    when("I search for applications by name test", async () => {
      const response = await request(app).get("/applications?name=test")
      expect(response.status).toBe(200)
      applicationListByName = response.body
    })

    then("I find two applications", (table) => {
      expect(applicationListByName.length).toBe(2)
      expect(table).toMatchObject(applicationListByName)
    })
  })

  test("Update application name", ({ given, when, then }) => {
    let application = { id: null }
    let applicationListByName = []

    given("I have application", async (docString) => {
      let expected = JSON.parse(docString)
      const response = await request(app).get("/applications/" + expected.id)
      expect(response.status).toBe(200)
      application = response.body
      expect(application).toMatchObject(expected)
    })

    when("I update name to newName", async () => {
      const response = await request(app)
        .patch("/applications/" + application.id)
        .set("name", "newName")
      expect(response.status).toBe(200)
      application = response.body
      expect(application).toHaveProperty("name")
      expect(application["name"]).toMatchObject("newName")
    })

    when("I search for applications by name newName", async () => {
      const response = await request(app).get("/applications?name=test")
      expect(response.status).toBe(200)
      applicationListByName = response.body
    })

    then("I find one application", (table) => {
      expect(applicationListByName.length).toBe(1)
      expect(table).toMatchObject(applicationListByName)
    })
  })
})
