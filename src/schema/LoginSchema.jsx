import * as zod from "zod";
export const LoginSchema = zod
  .object({
    username:zod.string().nonempty("username is required").max(10, "max name char is 10").min(3, "min name char is 3"),
    password: zod.string().nonempty("password is required").regex(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,"Password must include uppercase, lowercase, and a number (min 6 characters)"),
  })
