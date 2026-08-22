import React from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  Button,
} from "@heroui/react";

import bg from "../../assets/Hotel9.jpg"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../schema/RegisterSchema";
import RegisterApi from "../../Services/RegisterApi";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      phone_number: "",
    },
    resolver: zodResolver(RegisterSchema),
    mode: "onBlur",
  });

  async function SubmitForm(userData) {
    const response = await RegisterApi(userData);

    if (response?.data?.message === "User registered successfully") {
      toast.success(response.data.message);
      reset();
    } else {
      toast.error("Failed to register");
    }
  }

  return (
    <>
      <Toaster />

    
      <div
        className="h-80 bg-cover bg-fixed relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#3131318f] flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Register now</h2>
        </div>
      </div>

      <div className="container mx-auto w-sm sm:w-full 2xl:w-2xl">
        <Form
          onSubmit={handleSubmit(SubmitForm)}
          className="my-20 shadow-2xl space-y-4 rounded-2xl border bg-surface p-6"
        >

          <TextField>
            <Label>Username <span className="text-red-600">*</span></Label>
            <Input
            className="placeholder:text-gray-400"
              {...register("username")}
              placeholder="Enter your username"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">
                {errors.username.message}
              </p>
            )}
          </TextField>
          <TextField>
            <Label>Email <span className="text-red-600">*</span></Label>
            <Input
            className="placeholder:text-gray-400"
              {...register("email")}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </TextField>
          <TextField>
            <Label>Password <span className="text-red-600">*</span></Label>
            <Input
            className="placeholder:text-gray-400"
              {...register("password")}
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </TextField>
          <TextField>
            <Label>Phone number <span className="text-red-600">*</span></Label>
            <Input
            className="placeholder:text-gray-400"
              {...register("phone_number")}
              type="text"
              placeholder="Enter your phone number"
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </TextField>
          <Button
            type="submit"
            className="w-full bg-[#F3C300] hover:bg-[#c09a03] text-white"
          >
            Submit
          </Button>

        </Form>
      </div>
    </>
  );
}