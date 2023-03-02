import express from "express"
import handleRequest from "../../utils/handleRequest"

const router = express.Router()

const site = {
  id: "1c77b653",
  name: "test",
  displayName: "test",
  status: "live",
}

router.get("/", async (req, res) => {
  handleRequest(res, async () => {
    return [site]
  })
})

router.get("/:id", async (req, res) => {
  handleRequest(res, async () => {
    return site
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

router.put("/:id/clear_cache", async (req, res) => {
  handleRequest(res, async () => {
    res.status(200).send({"success": true})
  })
})

router.put("/:id/restart_php_engine", async (req, res) => {
  handleRequest(res, async () => {
    res.status(200).send({"success": true})
  })
})

export default router
