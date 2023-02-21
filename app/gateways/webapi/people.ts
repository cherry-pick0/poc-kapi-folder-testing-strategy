import express from "express";
import ServiceGetPeople from "../../../domain/services/getPeople";
import PeopleGraphQLRepository from "../repositories/PeopleGraphQLRepository";
import handleRequest from "../../utils/handleRequest";
import { GetPeopleResponse } from '../responses/index';

const router = express.Router();

router.get("/", async (req, res: GetPeopleResponse) => {
  handleRequest(res, async () => {
    let service = new ServiceGetPeople();
    service.peopleRepository = new PeopleGraphQLRepository();

    let response = await service.execute();
    return response.allPeople.people;
  });
});

export default router;
