import { GetPeopleResponse } from "./../responses/index"
import { IPeopleRepo } from "../../../domain/services/ServiceGetPeople"
import GraphQLProxy from "../../proxies/GraphQLProxy"
import { gql } from "graphql-request"

type PeopleRepo = IPeopleRepo

const PeopleGraphQLRepository: PeopleRepo = {
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
