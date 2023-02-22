import express from "express"
import { ServiceGetPeople } from "../../../domain/services/ServiceGetPeople"
import handleRequest from "../../utils/handleRequest"
import { GetPeopleResponse } from "../responses/index"
import ServiceFactory from "../../../domain/services/ServiceFactory"

const router = express.Router()

router.get("/", async (req, res: GetPeopleResponse) => {
  handleRequest(res, async () => {
    let service = ServiceFactory.instanceFor(ServiceGetPeople)
    let response = await service.execute()
    return response.allPeople.people
  })
})

export default router
