import redirectController from "../controller/redirect.controller.js";
import express from "express"

const router = express.Router()

router.get('/:short', redirectController.redirect)

export default router;
