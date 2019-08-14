import { Intent } from '../types'

export const nameIntent: Intent = {
  name: 'Activate Bot',
  action(agent) {
    agent.add('Hi, my name is Jarvis! ' + Date())
  }
}
