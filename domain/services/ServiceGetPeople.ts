import { GetPeopleResponse } from "../../app/gateways/responses/index"

export type IPeopleRepo = {
  getPeople(): Promise<GetPeopleResponse>
}

export const ServiceGetPeople = (peopleRepository: IPeopleRepo) => {
  const execute = () => {
    return peopleRepository.getPeople()
  }

  return { execute: execute }
}
