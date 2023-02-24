import { AddPersonResponse } from "../../app/gateways/responses/index"
import Person from "../entities/Person"

export type AddPersonIPeopleRepo = {
  addPerson(person: Person): Promise<AddPersonResponse>
}

export const ServiceAddPerson = (peopleRepository: AddPersonIPeopleRepo) => {
  const execute = (person: Person) => {
    return peopleRepository.addPerson(person)
  }

  return {
    execute: execute,
  }
}
