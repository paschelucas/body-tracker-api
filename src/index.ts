import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { ExampleController } from './controllers/ExampleController'
import { logger } from 'hono/logger'
import { ExampleService } from './services/ExampleService'
import { exampleRouter } from './router/exampleRouter'

export const app = new Hono()

// Custom logger
// app.use(async (c, next) => {
//   console.log(`[${c.req.method}] ${c.req.url}`)
//   await next()
// })

app.use(logger())


// Add a custom header
// app.use('/message/*', async (c, next) => {
//   await next()
//   c.header('Content-Type', 'application/json')
// })


app.route('example', exampleRouter)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
