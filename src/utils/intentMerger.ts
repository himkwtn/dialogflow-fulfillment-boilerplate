import { Intent, intentSchema } from '../types'

export const mergeIntent = (intents: { [intent: string]: Intent }) => {
  const intentsArr: Intent[] = []
  for (const key in intents) {
    const intent = intents[key]
    if (!intentSchema.isValidSync(intent)) {
      throw new Error('Invalid Intent')
    }
    intentsArr.push(intent)
  }
  const intentMap = new Map<Intent['name'], Intent['action']>()
  for (const intent of intentsArr) {
    intentMap.set(intent.name, intent.action)
  }
  return intentMap
}
