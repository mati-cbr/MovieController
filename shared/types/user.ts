import type {ZodUUID} from 'zod/v4'

export type User = {
  id: ZodUUID
  firstName: string
  lastName: string
  name?: string
  role: 'host' | 'guest'
  sessionCounter?: number
  lastSessionCreatedAd?: Date
}
