abstract class IUsersRepo {
    abstract getUsers(): [];
}

class ServiceGetUsers {
    users_repository: IUsersRepo

    execute() {
        return this.users_repository.getUsers()
    }
}

export default ServiceGetUsers