import { GetPeopleResponse } from "../../app/gateways/responses/index"

export type GetPeopleIPeopleRepo = {
  getPeople(): Promise<GetPeopleResponse>
}

export const ServiceGetPeople = (peopleRepository: GetPeopleIPeopleRepo) => {
  const execute = () => {
    return peopleRepository.getPeople()
  }

  return {
    execute: execute,
  }
}
