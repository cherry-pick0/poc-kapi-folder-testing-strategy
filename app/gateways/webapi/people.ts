import express from "express";
import ServiceGetPeople from "../../../domain/services/getPeople";
import PeopleGraphQLRepository from "../repositories/PeopleGraphQLRepository";
import handleRequest from '../../utils/handleRequest';

const router = express.Router();

router.get("/", async (req, res) => {
  handleRequest(res, async () => {
    let service = new ServiceGetPeople()
    service.peopleRepository = new PeopleGraphQLRepository()
    let people = service.execute()
    return people;
  });
});

export default router;
