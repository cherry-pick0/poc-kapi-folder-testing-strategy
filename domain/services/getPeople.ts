import { GetPeopleResponse } from '../../app/gateways/responses/index';

abstract class IPeopleRepo {
    abstract getPeople(): Promise<GetPeopleResponse>;
}

class ServiceGetPeople {
    peopleRepository: IPeopleRepo

    execute() {
        return this.peopleRepository.getPeople()
    }
}

export default ServiceGetPeople