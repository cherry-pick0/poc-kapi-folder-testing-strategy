import IPeopleRepo from "../../../domain/services/getPeople";
import GraphQLProxy from "./GraphQLProxy";
import { gql } from "graphql-request";

class PeopleGraphQLRepository extends IPeopleRepo {
  constructor() {
    super();
  }

  getPeople = async (): Promise<[]> => {
    const query = gql`
      query ExampleQuery {
        allPeople {
          people {
            id
            name
          }
        }
      }
    `;
    const proxy = GraphQLProxy();
    return await proxy.request(query);
  };
}

export default PeopleGraphQLRepository;
