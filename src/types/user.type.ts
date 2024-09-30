import { Role } from "./role.type"
import { Subject } from "./subject.type"

export type User = {
  id?: string
  username: string
  password: string
  firstName: string
  lastName: string
  middleName?: string
  role?: Role
  subjects?: Subject[]
}
