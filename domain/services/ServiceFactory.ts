import { ServiceGetPeople } from "./ServiceGetPeople"
import PeopleGraphQLRepository from "../../app/gateways/repositories/PeopleGraphQLRepository"

const getPeople = (args?) => {
  let service = ServiceGetPeople(PeopleGraphQLRepository)
  return service
}

let factories = {
  ServiceGetPeople: getPeople,
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
