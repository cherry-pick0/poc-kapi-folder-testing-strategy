import express from "express"
import { ServiceGetPeople } from "../../../domain/services/ServiceGetPeople"
import handleRequest from "../../utils/handleRequest"
import { GetPeopleResponse, AddPersonResponse } from "../responses/index"
import ServiceFactory from "../../../domain/services/ServiceFactory"
import { ServiceAddPerson } from "../../../domain/services/ServiceAddPerson"
import Person from "../../../domain/entities/Person"

const router = express.Router()

router.get("/", async (req, res) => {
  handleRequest(res, async () => {
    let service = ServiceFactory().instanceFor(ServiceGetPeople)
    let response: GetPeopleResponse = await service.execute()
    return response.allPeople.people
  })
})

router.post("/", async (req, res) => {
  let service = ServiceFactory().instanceFor(ServiceAddPerson)
  let person: Person = { name: "Rick" }
  let response: AddPersonResponse = await service.execute(person)
  res.status(201).send(response)
})

export default router
