import { Context, Hono } from "hono"
import { ExampleService } from "../services/ExampleService"

export class ExampleController {
    constructor(private readonly exampleService: ExampleService) {}

    public async get(c: Context) {
        return this.exampleService.get(c)
    }
}