import IUsersRepo from "../../../domain/services/getUsers";

class UsersGraphQLRepository extends IUsersRepo {
  constructor() {
    super()
  }

  getUsers() : [] {
    return []
  }
}

export default UsersGraphQLRepository