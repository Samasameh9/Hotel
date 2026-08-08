import * as zod from "zod";
export const RegisterSchema = zod
  .object({
    username:zod.string().nonempty("username is required").max(10, "max name char is 10").min(3, "min name char is 3"),
    email: zod.string().nonempty("email is required").regex(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/, "Please enter a valid email address (example: user@example.com)"),
    password: zod.string().nonempty("password is required").regex(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,"Password must include uppercase, lowercase, and a number (min 6 characters)"),
    phone_number:zod.string().nonempty("phone number is required").regex(/^01[0125][0-9]{8}$/,"Invalid phone number (must start with 010, 011, 012, or 015)")
  })

