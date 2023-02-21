import ServiceGetPeople from "./ServiceGetPeople";
import PeopleGraphQLRepository from "../../app/gateways/repositories/PeopleGraphQLRepository";

const getPeople = (args?) => {
  let service = new ServiceGetPeople();
  service.peopleRepository = new PeopleGraphQLRepository();
  return service;
};

let factories = {
  ServiceGetPeople: getPeople,
};

class ServiceFactory {
  static instanceFor = (serviceClass, ...args: any[]) => {
    try {
      let serviceInstance = factories[serviceClass.name](args);
      return serviceInstance;
    } catch (error) {
      console.log(error);
    }
  };
}

export default ServiceFactory;