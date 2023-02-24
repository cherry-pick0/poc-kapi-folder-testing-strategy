import { AddPersonResponse } from "../../app/gateways/responses"
import Person from "../entities/Person"
import { ServiceAddPerson, AddPersonIPeopleRepo } from "./ServiceAddPerson"

describe("Test service for adding a Person", () => {
  it("tests happy path for creating a person", async () => {
    const testPeopleRepo: AddPersonIPeopleRepo = {
      addPerson: async (person: Person): Promise<AddPersonResponse> => {
        return {
          id: person.id,
          name: person.name,
          email_address: person.emailAddress.address,
        }
      },
    }

    const service = ServiceAddPerson(testPeopleRepo)
    let person: Person = { name: "Rick" }
    let data = await service.execute(person)

    expect(typeof data).toBe("object")
    expect(data).toHaveProperty("id")
    expect(data).toHaveProperty("name")
    expect(data).toHaveProperty("email_address")
  })
})
