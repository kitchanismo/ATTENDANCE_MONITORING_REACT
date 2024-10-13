import { useState } from 'react'
import axios from '@/api'
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Toggle } from '@/components/ui/toggle'
import { EyeOff, Eye } from 'lucide-react'
import { User } from '@/types/user.type'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/hooks/use-toast'

interface ChangePasswordFormProps {
  userData: User
}

const ChangePasswordForm = ({ userData }: ChangePasswordFormProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const { toast } = useToast()

  const changePasswordSchema = z.object({
    oldPassword: z
      .string()
      .min(6)
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must contain at least one letter and one number"
      ),
    password: z
      .string()
      .min(6)
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must contain at least one letter and one number"
      ),
    confirmPassword: z
      .string()
      .min(6)
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)/,
        "Password must contain at least one letter and one number"
      ),
  }).refine((data) => data.oldPassword !== data.password, {
    message: "New password cannot be the same as old password",
    path: ['password']
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

  const changePasswordForm = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    }
  })

  const handleChangePassword = async (changePasswordValues: z.infer<typeof changePasswordSchema>) => {
    try {
      const response = await axios.put(`/api/users/${userData.id}`, {
        ...userData,
        confirmPassword: changePasswordValues.confirmPassword,
        password: changePasswordValues.oldPassword,
      })
      if (response.data.status === 201) {
        toast({
          description: "Your password has been updated successfully."
        })
        console.log('Password Changed Successfully')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsOpen(false)
    }
  }

  const handleDialogOpen = () => {
    setIsOpen(!isOpen)

    if (!isOpen) {
      setShowOldPassword(false)
      setShowPassword(false)
      setShowConfirmPassword(false)
      changePasswordForm.reset()
    }
  }


  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleDialogOpen}>
        <DialogTrigger asChild>
          <Button variant={"secondary"}>Change Password</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Form {...changePasswordForm}>
            <form onSubmit={changePasswordForm.handleSubmit(handleChangePassword)} className='space-y-4'>
              <FormField
                control={changePasswordForm.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <div className='relative flex items-center'>
                        <Input type={showOldPassword ? 'text' : 'password'} placeholder="Old Password" {...field} />
                        <Toggle variant={"outline"} className='absolute right-0 top-0 bottom-0 border-l-0' onClick={() => setShowOldPassword(!showOldPassword)}>
                          {
                            showOldPassword
                              ? <Eye className='text-gray-500 hover:text-gray-700' size={18} />
                              : <EyeOff className='text-gray-500 hover:text-gray-700' size={18} />
                          }
                        </Toggle>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={changePasswordForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <div className='relative flex items-center'>
                        <Input type={showPassword ? 'text' : 'password'} placeholder="New Password" {...field} />
                        <Toggle variant={"outline"} className='absolute right-0 top-0 bottom-0 border-l-0' onClick={() => setShowPassword(!showPassword)}>
                          {
                            showPassword
                              ? <Eye className='text-gray-500 hover:text-gray-700' size={18} />
                              : <EyeOff className='text-gray-500 hover:text-gray-700' size={18} />
                          }
                        </Toggle>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={changePasswordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <div className='relative flex items-center'>
                        <Input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" {...field} />
                        <Toggle variant={"outline"} className='absolute right-0 top-0 bottom-0 border-l-0' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {
                            showConfirmPassword
                              ? <Eye className='text-gray-500 hover:text-gray-700' size={18} />
                              : <EyeOff className='text-gray-500 hover:text-gray-700' size={18} />
                          }
                        </Toggle>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type='submit' >Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      <Toaster></Toaster>
    </>

  )
}

export default ChangePasswordForm
