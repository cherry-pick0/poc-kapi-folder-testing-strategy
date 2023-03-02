import express from "express"
import handleRequest from "../../utils/handleRequest"

const router = express.Router()

const applications = [
  {
    id: "1",
    name: "test",
    displayName: "test",
    status: "deploymentSuccess",
  },
  {
    id: "2",
    name: "someSite",
    displayName: "someSite",
    status: "deploymentSuccess",
  },
  {
    id: "3",
    name: "test",
    displayName: "test2",
    status: "deploymentSuccess",
  },
]

router.get("/", async (req, res) => {
  handleRequest(res, async () => {
    if (!req.query.name) return applications
    return applications.filter(
      (application) => application.name == req.query.name
    )
  })
})

router.get("/:id", async (req, res) => {
  handleRequest(res, async () => {
    return applications.filter((app) => app.id == req.params.id)[0]
  })
})

router.post("/", async (req, res) => {
  let data = {}
  res.status(201).send(data)
})

router.delete("/:id", async (req, res) => {
  handleRequest(res, async () => {
    res.status(204).send({})
  })
})

router.patch("/:id", async (req, res) => {
  handleRequest(res, async () => {
    let application = applications.filter((app) => app.id == req.params.id)[0]

    Object.keys(req.body).forEach((key) => {
      if (key == "name") application[key] = req.body[key]
    })

    res.status(200).send(application)
  })
})

export default router
