import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from "./config/db";

dotenv.config({});

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("App listening on Port : ", port);
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });
