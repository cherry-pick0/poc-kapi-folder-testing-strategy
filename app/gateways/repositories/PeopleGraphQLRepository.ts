import { GetPeopleResponse } from "./../responses/index"
import { GetPeopleIPeopleRepo } from "../../../domain/services/ServiceGetPeople"
import GraphQLProxy from "../../proxies/GraphQLProxy"
import { gql } from "graphql-request"
import { AddPersonIPeopleRepo } from "../../../domain/services/ServiceAddPerson"
import { AddPersonResponse } from "../responses/index"
import Person from "../../../domain/entities/Person"
import { DeletePersonIPeopleRepo } from "../../../domain/services/ServiceDeletePerson"

type PeopleRepos = AddPersonIPeopleRepo &
  GetPeopleIPeopleRepo &
  DeletePersonIPeopleRepo

const PeopleGraphQLRepository: PeopleRepos = {
  getPeople: async (id?: number): Promise<GetPeopleResponse> => {
    const query = gql`
      query ExampleQuery {
        allPeople {
          people {
            id
            name
          }
        }
      }
    `
    const proxy = GraphQLProxy()
    return await proxy.request(query)
  },
  addPerson: async (person: Person): Promise<AddPersonResponse> => {
    const data: AddPersonResponse = {
      id: 0,
      name: person.name,
      email_address: "fakeEmail",
    }

    return data
  },

  deletePerson: async (id: number): Promise<void> => {},
}

export default PeopleGraphQLRepository
