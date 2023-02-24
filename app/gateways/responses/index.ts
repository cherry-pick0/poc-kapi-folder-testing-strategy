import Person from "../../../domain/entities/Person"

export type GetPeopleResponse = {
  allPeople: {
    people: Person[]
  }
}

export type AddPersonResponse = {
  id: number | undefined
  name: string,
  email_address: string | undefined
}
