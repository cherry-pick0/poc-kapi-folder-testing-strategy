import {
  ServiceDeletePerson,
  DeletePersonIPeopleRepo,
} from "./ServiceDeletePerson"

describe("Test service for deleting a Person", () => {
  it("tests happy path for deleting a person", async () => {
    const testPeopleRepo: DeletePersonIPeopleRepo = {
      deletePerson: function (id: number): Promise<void> {
        return
      },
    }

    const service = ServiceDeletePerson(testPeopleRepo)
    await service.execute(1)
  })
})
