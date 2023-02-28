export interface DeletePersonIPeopleRepo {
  deletePerson(id: number): Promise<void>
}

export const ServiceDeletePerson = (peopleRepository: DeletePersonIPeopleRepo) => {
  const execute = async (id: number) => {
    return peopleRepository.deletePerson(id)
  }

  return {
    execute: execute,
  }
}
