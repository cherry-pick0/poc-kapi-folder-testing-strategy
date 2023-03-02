import { Router } from "express"
import people from "./people"
import sites from "./sites"

const router = Router()
router.use("/people", people)
router.use("/sites", sites)

export default router
