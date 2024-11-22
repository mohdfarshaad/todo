import { User } from "../models/userModel";

export const createUser = async (email: string, password: string) => {
  try {
    const newUser = await User.create({ email, password });
    console.log("User created : ", newUser);
  } catch (error) {
    console.log("No user created : ", error);
  }
};
