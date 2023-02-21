abstract class IPeopleRepo {
    abstract getPeople(): Promise<[]>;
}

class ServiceGetPeople {
    peopleRepository: IPeopleRepo

    execute() {
        return this.peopleRepository.getPeople()
    }
}

export default ServiceGetPeople