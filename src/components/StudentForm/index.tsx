/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { Student } from "@/types/student.type"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNavigate } from "react-router-dom"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

// Student Form Schema
const studentFormSchema = z.object({
  studentId: z.string().min(1, { message: "Student ID is required" }),
  rfid: z.string().min(1, { message: "RFID is required" }),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  middleName: z.string(),
})

const CreateStudentForm = () => {
  const navigate = useNavigate()
  const studentCreateForm = useForm<Student>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      studentId: "",
      rfid: "",
      firstName: "",
      lastName: "",
      middleName: "",
    },
  })

  const onSubmit = async (student: Student) => {
    // TODO: API Integration
    console.log(student)
  }

  return (
    <div className="w-full 2xl:w-[50%] mx-auto justify-center items-center flex mt-5 flex-col">
      <a href="/student" className="w-full flex justify-end">
        <Button className="">Back</Button>
      </a>

      <Form {...studentCreateForm}>
        <form
          onSubmit={studentCreateForm.handleSubmit(onSubmit)}
          className="w-full max-w-lg mx-auto p-4 rounded-md dark:border-white dark:bg-gray-800"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4 dark:text-white">
            Create Student
          </h1>
          <div className="flex flex-col space-y-5">
            <FormField
              control={studentCreateForm.control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student ID</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Student ID"
                      {...field}
                      className="dark:border-gray-200"
                    />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={studentCreateForm.control}
              name="rfid"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>RFID</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your RFID"
                      {...field}
                      className="dark:border-gray-200"
                    />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={studentCreateForm.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your First Name"
                      {...field}
                      className="dark:border-gray-200"
                    />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={studentCreateForm.control}
              name="middleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your Middle Name"
                      {...field}
                      className="dark:border-gray-200"
                    />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <FormField
              control={studentCreateForm.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your Last Name"
                      {...field}
                      className="dark:border-gray-200"
                    />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
          >
            Create
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateStudentForm
