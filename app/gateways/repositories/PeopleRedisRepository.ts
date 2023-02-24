import { GetPeopleResponse } from "../responses/index"
import { GetPeopleIPeopleRepo } from "../../../domain/services/ServiceGetPeople"
import { AddPersonIPeopleRepo } from "../../../domain/services/ServiceAddPerson"
import { AddPersonResponse } from "../responses/index"
import Person from "../../../domain/entities/Person"
import RedisProxy from "../../proxies/RedisProxy"

type PeopleRepos = AddPersonIPeopleRepo & GetPeopleIPeopleRepo

const PeopleRedisRepository: PeopleRepos = {
  getPeople: async (): Promise<GetPeopleResponse> => {
    return undefined
  },
  addPerson: async (person: Person): Promise<AddPersonResponse> => {
    let name = person.name
    let email = person.emailAddress?.address

    const redisClient = await RedisProxy()
    redisClient.connect()

    let people = await redisClient.get("people")
    if (!people) people = "{}"

    let peopleJSON = JSON.parse(people)
    let newID: number = Object.keys(peopleJSON).length + 1

    const data: AddPersonResponse = {
      id: newID,
      name: name ? name : "",
      email_address: email ? email : "",
    }

    peopleJSON[newID] = data
    people = JSON.stringify(peopleJSON)

    redisClient.set("people", people)

    return data
  },
}

export default PeopleRedisRepository
