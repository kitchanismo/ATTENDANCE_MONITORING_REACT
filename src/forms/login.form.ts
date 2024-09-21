import { User } from "@/types/user.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const loginFormSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export const useLoginForm = (defaultUser: User) =>
  useForm<User>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: defaultUser,
  })
