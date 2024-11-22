import dotenv from "dotenv";
import { app } from "./app";
import { connectDB } from "./db";

dotenv.config({});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("App listening on Port : ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
