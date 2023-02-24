import { GetPeopleResponse } from "./../responses/index"
import { GetPeopleIPeopleRepo } from "../../../domain/services/ServiceGetPeople"
import GraphQLProxy from "../../proxies/GraphQLProxy"
import { gql } from "graphql-request"

const PeopleGraphQLRepository: GetPeopleIPeopleRepo = {
  getPeople: async (): Promise<GetPeopleResponse> => {
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
}

export default PeopleGraphQLRepository
