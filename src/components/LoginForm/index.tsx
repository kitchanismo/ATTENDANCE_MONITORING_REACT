import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { User } from "@/types/user.type"
import api from "@/api"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/store"
import { actions } from "@/store/slices/user.slice"
import { getDecodedToken } from "@/lib/utils"

const loginFormSchema = z.object({
  username: z
    .string()
    .min(6)
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Username must contain at least one letter and one number"
    ),
  password: z
    .string()
    .min(6)
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)/,
      "Password must contain at least one letter and one number"
    ),
})

const LoginForm = () => {
  const loginForm = useForm<User>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  const navigate = useNavigate()
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null
  )
  const dispatch = useDispatch<AppDispatch>()

  const onSubmit = async (user: User) => {
    try {
      const response = await api.post("api/auth/signin", user)

      if (response.status === 200) {
        const accessToken = response.data.accessToken
        const user = getDecodedToken(accessToken)?.data as User
        dispatch(actions.setCurrentUser(user))
        localStorage.setItem("accessToken", accessToken)
        navigate("/dashboard")
      }
    } catch (e) {
      console.log({ e })
      setLoginErrorMessage("Invalid login credentials. Please try again.")
      loginForm.reset()
    }
  }

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className="space-y-4 min-w-[80vw] sm:min-w-[70vw] md:min-w-[60vw] lg:min-w-[30rem] p-8 border rounded-xl"
      >
        {loginErrorMessage && (
          <p className="text-red-500">{loginErrorMessage}</p>
        )}
        <h1 className="text-xl font-bold">Login</h1>

        <FormField
          control={loginForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}

export default LoginForm
