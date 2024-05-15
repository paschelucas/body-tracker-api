import { Context } from "hono"

export class ExampleService {
    public async get(c: Context) {
        const body = await c.req.json()
        console.log(body)
        return c.json({
            ok: true,
            message: 'Hello World',
            object: body
        }, 201)
    }
}