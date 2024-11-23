import { IUserDocument, User } from "../models/userModel";

export const createUser = async (
  email: string,
  password: string
): Promise<IUserDocument> => {
  try {
    const newUser = await User.create({ email, password });
    console.log("User created : ", newUser);
    const user = await User.findById(newUser._id).select(
      "-password -refreshToken"
    );

    return user as IUserDocument;
  } catch (error) {
    console.log("Error creating user : ", error);
    throw error;
  }
};

export const checkExistingUser = async (email: string): Promise<boolean> => {
  try {
    const existingUser = await User.findOne({ email });
    return !!existingUser;
  } catch (error) {
    console.log("Error while finding user", error);
    throw error;
  }
};
