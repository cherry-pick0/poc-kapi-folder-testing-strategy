import { GetPeopleResponse } from "../../app/gateways/responses/index"

export interface GetPeopleIPeopleRepo {
  getPeople(id?: number): Promise<GetPeopleResponse>
}

export type GetPeopleRequest = {
  id?: number
}

export const ServiceGetPeople = (peopleRepository: GetPeopleIPeopleRepo) => {
  const execute = (request: GetPeopleRequest) => {
    return peopleRepository.getPeople(request.id)
  }

  return {
    execute: execute,
  }
}
