import IUsersRepo from "../../../domain/services/getUsers";
import GraphQLProxy from "./GraphQLProxy";
import { gql } from "graphql-request";

class UsersGraphQLRepository extends IUsersRepo {
  constructor() {
    super();
  }

  getUsers = async (): Promise<[]> => {
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

export default UsersGraphQLRepository;
