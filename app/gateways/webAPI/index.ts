import { Router } from "express"
import people from "./people"
import sites from "./sites"
import applications from "./applications"

const router = Router()
router.use("/people", people)
router.use("/sites", sites)
router.use("/applications", applications)

export default router
