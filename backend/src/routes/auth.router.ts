import express from "express"
import validate from "../middleware/validate.middleware.js"
import UserSchema from "../schema/users.schema.js"
import AuthController from "../controller/auth.controller.js"

const router = express.Router()

router.post('/signup', validate(UserSchema.signupSchema), AuthController.signup)

router.post('/login', validate(UserSchema.loginSchema), AuthController.login)

export default router
