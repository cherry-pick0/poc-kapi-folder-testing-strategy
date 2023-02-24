import { ServiceGetPeople } from "./ServiceGetPeople"
import PeopleGraphQLRepository from "../../app/gateways/repositories/PeopleGraphQLRepository"
import { ServiceAddPerson } from "./ServiceAddPerson"

const getPeople = (args?) => {
  let service = ServiceGetPeople(PeopleGraphQLRepository)
  return service
}

const addPerson = (args?) => {
  let service = ServiceAddPerson(PeopleGraphQLRepository)
  return service
}

let factories = {
  ServiceGetPeople: getPeople,
  ServiceAddPerson: addPerson,
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
