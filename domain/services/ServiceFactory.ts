import { ServiceGetPeople } from "./ServiceGetPeople"
import { ServiceAddPerson } from "./ServiceAddPerson"
import { ServiceDeletePerson } from "./ServiceDeletePerson"
import PeopleRedisRepository from "../../app/gateways/repositories/PeopleRedisRepository"

const getPeople = (args?) => {
  let service = ServiceGetPeople(PeopleRedisRepository)
  return service
}

const addPerson = (args?) => {
  let service = ServiceAddPerson(PeopleRedisRepository)
  return service
}

const deletePerson = (args?) => {
  let service = ServiceDeletePerson(PeopleRedisRepository)
  return service
}

let factories = {
  ServiceGetPeople: getPeople,
  ServiceAddPerson: addPerson,
  ServiceDeletePerson: deletePerson,
}

export const ServiceFactory = () => {
  const instanceFor = (serviceMethod, ...args: any[]) => {
    try {
      let serviceInstance = factories[serviceMethod.name](args)
      return serviceInstance
    } catch (error) {
      console.log(error)
    }
  }

  return { instanceFor: instanceFor }
}

export default ServiceFactory
