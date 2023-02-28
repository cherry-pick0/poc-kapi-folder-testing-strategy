import { AddPersonResponse } from "../../app/gateways/responses/index"
import Person from "../entities/Person"

export interface AddPersonIPeopleRepo {
  addPerson(person: Person): Promise<AddPersonResponse>
}

export const ServiceAddPerson = (peopleRepository: AddPersonIPeopleRepo) => {
  const execute = async (person: Person) => {
    return peopleRepository.addPerson(person)
  }

  return {
    execute: execute,
  }
}
