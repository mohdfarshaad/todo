import { User } from "../models/userModel.js";
import { ApiResponse, asyncHandler, ApiError } from "../utils/index.js";

const registerUser = asyncHandler(async (req, res) => {
  // Getting credintials from the body
  const { username, email, password } = req.body;

  console.log(username, email, password);

  if (!username || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  // finding for existing user
  const existingUser = await User.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (existingUser) {
    throw new ApiError(409, "User with this email or username exists");
  }

  // Creating the user
  const createdUser = await User.create({
    username,
    email,
    password,
  });

  const userCreated = await User.findById(createdUser._id).select(
    "-password -refreshToken"
  );

  if (!userCreated) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  // Sending response
  return res
    .status(201)
    .json(new ApiResponse(201, userCreated, "User registered successfully"));
});

const loginUser = () => {};

const logoutUser = () => {};

export { registerUser, loginUser, logoutUser };
