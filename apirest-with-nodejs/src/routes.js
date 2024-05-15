import { Router } from "express"
import CountriesController from "./app/controllers/CountriesController.js"

const router = Router()

//ROUTES
router.get("/countries", CountriesController.index)
router.get("/countries/:id", CountriesController.show)
router.post('/countries', CountriesController.store)
router.put("/countries/:id", CountriesController.update)
router.delete("/countries/:id", CountriesController.delete)

export default router
