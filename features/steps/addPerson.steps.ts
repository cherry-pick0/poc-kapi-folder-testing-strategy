const { Given, When, Then } = require("@cucumber/cucumber")

const { request } = require("supertest")

const app = require("../../index.ts")

When("we create a person", async function () {
  // Write code here that turns the phrase above into concrete actions
  const response = await request(app).get("/people")
  return response.body
})

Then("we should receive", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  console.log(dataTable)
  return "pending"
})
