import express from "express";
import ServiceGetUsers from "../../../domain/services/getUsers";
import UsersGraphQLRepository from "../repositories/UsersGraphQLRepository";
import handleRequest from '../../utils/handleRequest';

const router = express.Router();

router.get("/", async (req, res) => {
  handleRequest(res, async () => {
    let service = new ServiceGetUsers()
    service.users_repository = new UsersGraphQLRepository()
    let users = service.execute()
    return users;
  });
});

export default router;
