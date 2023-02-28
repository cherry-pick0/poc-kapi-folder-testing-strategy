import express from "express"
import {
  ServiceGetPeople,
  GetPeopleRequest,
} from "../../../domain/services/ServiceGetPeople"
import handleRequest from "../../utils/handleRequest"
import { GetPeopleResponse, AddPersonResponse } from "../responses/index"
import ServiceFactory from "../../../domain/services/ServiceFactory"
import { ServiceAddPerson } from "../../../domain/services/ServiceAddPerson"
import { Person } from "../../../domain/entities/Person"
import { ServiceDeletePerson } from "../../../domain/services/ServiceDeletePerson"
import { PersonNotFoundError } from "../../../domain/services/ServiceGetPeople"

const router = express.Router()

router.get("/", async (req, res) => {
  handleRequest(res, async () => {
    let service = ServiceFactory().instanceFor(ServiceGetPeople)
    let request: GetPeopleRequest = {}
    let response: GetPeopleResponse = await service.execute(request)
    return response.allPeople.people
  })
})

router.get("/:id", async (req, res) => {
  handleRequest(res, async () => {
    try {
      let service = ServiceFactory().instanceFor(ServiceGetPeople)
      let request: GetPeopleRequest = { id: +req.params.id }
      let response: GetPeopleResponse = await service.execute(request)
      let person = response.allPeople.people[0]
      return person
    } catch (e) {
      if (e instanceof PersonNotFoundError) {
        res.status(404).send()
      }
      throw e
    }
  })
})

router.post("/", async (req, res) => {
  let service = ServiceFactory().instanceFor(ServiceAddPerson)
  let person: Person = { name: "Rick" }
  let response: AddPersonResponse = await service.execute(person)
  res.status(201).send(response)
})

router.delete("/:id", async (req, res) => {
  handleRequest(res, async () => {
    let service = ServiceFactory().instanceFor(ServiceDeletePerson)
    await service.execute(req.params.id)

    res.status(204).send({})
  })
})

export default router
