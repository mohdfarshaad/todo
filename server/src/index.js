import dotenv from "dotenv";
dotenv.config();

import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`App is running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("DB Connection Failed", error);
  });
