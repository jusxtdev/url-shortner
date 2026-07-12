import URLController from "@/controller/urls.controller.js"
import validate from "@/middleware/validate.middleware.js"
import URLSchema from "@/schema/urls.schema.js"
import express from "express"

const router = express.Router()

router.post('/', validate(URLSchema.newURLSchema), URLController.newURL)

export default router
