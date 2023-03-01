const { Given, When, Then } = require("@cucumber/cucumber")
const {
  ServiceAddPerson,
  AddPersonIPeopleRepo,
} = require("../../domain/services/ServiceAddPerson")
const { Person } = require("../../domain/entities/Person")
const { AddPersonResponse } = require("../../app/gateways/responses/index")

When("we create a person", async function () {
  // Write code here that turns the phrase above into concrete actions
  const testPeopleRepo: AddPersonIPeopleRepo = {
    addPerson: async (person: Person): Promise<AddPersonResponse> => {
      return {
        id: person.id,
        name: person.name,
        email_address: person.emailAddress?.EmailAddressSchema.address,
      }
    },
  }
  const service = ServiceAddPerson(testPeopleRepo)
  let person: Person = { name: "Rick" }
  let data = await service.execute(person)
  return data
})

Then("we should receive", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  return "pending"
})
