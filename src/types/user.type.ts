//we can alternatively use z.infer to get the type of User,
//but it can caused coupling to zod and other deps
export type User = {
  username: string
  password: string
}
