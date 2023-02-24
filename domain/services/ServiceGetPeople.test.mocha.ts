import { expect } from "chai"
import { describe } from "mocha"
import { GetPeopleResponse } from "../../app/gateways/responses"
import { ServiceGetPeople, GetPeopleIPeopleRepo } from "./ServiceGetPeople"
import Person from "../entities/Person"

describe("Test service for getting a list of people", () => {
  it("tests happy path for getting people", async () => {
    const testPeopleRepo: GetPeopleIPeopleRepo = {
      getPeople: async (): Promise<GetPeopleResponse> => {
        let person: Person = { id: 1, name: "Rick" }
        return { allPeople: { people: [person] } }
      },
    }

    const service = ServiceGetPeople(testPeopleRepo)
    let data = await service.execute()

    expect(data).to.be.a("object")
    expect(data).to.have.property("allPeople")
    expect(data["allPeople"]).to.have.property("people")
    expect(data["allPeople"]["people"]).to.be.a("array")

    let people = data["allPeople"]["people"]
    expect(people.length).to.be.equal(1)
    expect(people[0]).to.be.a("object")
    expect(people[0]).to.have.property("id")
    expect(people[0]).to.have.property("name")
  })
})
