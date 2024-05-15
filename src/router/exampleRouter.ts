import { Hono } from "hono"
import { app } from ".."
import { ExampleController } from "../controllers/ExampleController"
import { ExampleService } from "../services/ExampleService"

const exampleService = new ExampleService()
const exampleController = new ExampleController(exampleService)

export const exampleRouter = new Hono()

exampleRouter.post('/hello/:id', async (c) => exampleController.get(c))
