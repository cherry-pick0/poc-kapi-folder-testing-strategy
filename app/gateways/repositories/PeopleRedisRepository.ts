import { GetPeopleResponse } from "../responses/index"
import { GetPeopleIPeopleRepo } from "../../../domain/services/ServiceGetPeople"
import { AddPersonIPeopleRepo } from "../../../domain/services/ServiceAddPerson"
import { AddPersonResponse } from "../responses/index"
import Person from "../../../domain/entities/Person"
import RedisProxy from "../../proxies/RedisProxy"
import { DeletePersonIPeopleRepo } from "../../../domain/services/ServiceDeletePerson"

type PeopleRepos = AddPersonIPeopleRepo &
  GetPeopleIPeopleRepo &
  DeletePersonIPeopleRepo

const PeopleRedisRepository: PeopleRepos = {
  getPeople: async (id?: number): Promise<GetPeopleResponse> => {
    const redisClient = await RedisProxy()
    redisClient.connect()

    let people = await redisClient.get("people")
    if (!people) people = "{}"
    let peopleJSON = JSON.parse(people)
    let peopleList = []

    if (id) {
      let obj = peopleJSON[id]
      peopleList.push(obj)
    } else {
      Object.entries(peopleJSON).forEach((obj) => {
        const [_, value] = obj
        peopleList.push(value)
      })
    }

    const data: GetPeopleResponse = { allPeople: { people: peopleList } }
    return data
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
  deletePerson: async (id: number): Promise<void> => {
    const redisClient = await RedisProxy()
    redisClient.connect()

    let people = await redisClient.get("people")
    if (!people) people = "{}"
    let peopleJSON = JSON.parse(people)
    delete peopleJSON[id]
    people = JSON.stringify(peopleJSON)
    redisClient.set("people", people)
  },
}

export default PeopleRedisRepository
