import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import { WebhookClient } from 'dialogflow-fulfillment'
import { Request, Response } from 'express'
import * as cors from 'cors'
import * as express from 'express'
import * as intents from './intents'
import { mergeIntent } from './utils'
import * as dotenv from 'dotenv'

const app = express()

app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const dialogflowAgent = (request: Request, response: Response) =>
  new WebhookClient({ request, response })

app.post('/', (req, res) => {
  const agent = dialogflowAgent(req, res)
  const intentMap = mergeIntent(intents)
  agent.handleRequest(intentMap)
})

dotenv.config()

const port = process.env.PORT

app.listen(port, () => console.log(`server listening on port ${port}`))

export default app
