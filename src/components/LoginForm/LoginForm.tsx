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
import { useLoginForm } from "@/forms/login.form"
import { User } from "@/types/user.type"

const LoginForm = () => {
  const loginForm = useLoginForm({ username: "", password: "" })

  const onSubmit = (user: User) => {
    console.log(user)
  }

  const formItem =
    (label: string) =>
    ({ field }) =>
      (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={label} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )

  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit(onSubmit)}
        className="space-y-4 min-w-[80vw] md:min-w-[60vw] lg:min-w-[600px] p-8 border rounded-xl"
      >
        <h1 className="text-xl font-bold">Login</h1>

        <FormField
          control={loginForm.control}
          name="username"
          render={formItem("Username")}
        />
        <FormField
          control={loginForm.control}
          name="password"
          render={formItem("Password")}
        />
        <Button type="submit">Login</Button>
      </form>
    </Form>
  )
}

export default LoginForm
