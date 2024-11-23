import { User } from "../models/user.model";
import { IUserDocument, SignupDTO } from "../types/user";

export const createUser = async (
  email: string,
  password: string
): Promise<SignupDTO> => {
  try {
    const newUser = await User.create({ email, password });
    console.log("User created : ", newUser);
    const user = await User.findById(newUser._id).select(
      "-password -refreshToken"
    );

    return user as SignupDTO;
  } catch (error) {
    console.log("Error creating user : ", error);
    throw error;
  }
};

export const checkExistingUser = async (
  email: string
): Promise<IUserDocument> => {
  try {
    const existingUser = await User.findOne({ email });
    return existingUser as IUserDocument;
  } catch (error) {
    console.log("Error while finding user", error);
    throw error;
  }
};

export const generateAccessAndRefreshTokens = (user: IUserDocument) => {
  const accessToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();

  return { accessToken, refreshToken };
};
