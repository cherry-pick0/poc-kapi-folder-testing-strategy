abstract class IUsersRepo {
    abstract getUsers(): Promise<[]>;
}

class ServiceGetUsers {
    usersRepository: IUsersRepo

    execute() {
        return this.usersRepository.getUsers()
    }
}

export default ServiceGetUsers