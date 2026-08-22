import React from "react";
import {
  Form,
  TextField,
  Label,
  Input,
  Button,
} from "@heroui/react";

import bg from "./../../assets/hotel9.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../../schema/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import LoginApi from "../../Services/LoginApi";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Context/authcontext";

export default function Login() {
  const { setuserId } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
    mode: "onBlur",
  });

  async function SubmitForm(userData) {
    const response = await LoginApi(userData);

    if (response?.data?.message === "Login successful") {
      toast.success(response.data.message);
      localStorage.setItem("id", response.data.user_id);
      setuserId(response.data.user_id);
      navigate("/");
    } else {
      toast.error("Failed to login");
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
          <h2 className="text-white text-4xl font-bold">Login now</h2>
        </div>
      </div>
      <div className="container mx-auto w-sm sm:w-full 2xl:w-2xl">
        <Form
          onSubmit={handleSubmit(SubmitForm)}
          className="my-20 shadow-2xl space-y-6 rounded-2xl border bg-surface p-6"
        >
          <TextField>
            <Label>
              Username <span className="text-red-600">*</span>
            </Label>

            <Input
            className='placeholder:text-gray-400'
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
            <Label>
              Password <span className="text-red-600">*</span>
            </Label>

            <Input
               className='placeholder:text-gray-400'
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
          <Button
            type="submit"
            className="w-full bg-[#F3C300] hover:bg-[#c09a03] text-white"
          >
            Login
          </Button>

          <Link to="/register">
            <p className="text-sm text-[#777777] text-center">
              Don’t have an account?
            </p>
          </Link>

        </Form>
      </div>
    </>
  );
}