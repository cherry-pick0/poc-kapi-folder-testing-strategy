import { GetPeopleResponse } from "../../app/gateways/responses"
import { ServiceGetPeople, GetPeopleIPeopleRepo } from './ServiceGetPeople';
import { Person } from "../entities/Person"

describe("Test service for getting a list of people", () => {
  it("tests happy path for getting people", async () => {
    const testPeopleRepo: GetPeopleIPeopleRepo = {
      getPeople: async (): Promise<GetPeopleResponse> => {
        let person: Person = { id: 1, name: "Rick" }
        return { allPeople: { people: [person] } }
      },
    }

    const service = ServiceGetPeople(testPeopleRepo)
    let data = await service.execute({})

    expect(typeof data).toBe("object")
    expect(data).toHaveProperty("allPeople")
    expect(data["allPeople"]).toHaveProperty("people")
    expect(Array.isArray(data["allPeople"]["people"])).toBeTruthy()

    let people = data["allPeople"]["people"]
    expect(people.length).toBe(1)
    expect(typeof people[0]).toBe("object")
    expect(people[0]).toHaveProperty("id")
    expect(people[0]).toHaveProperty("name")
  })
})
