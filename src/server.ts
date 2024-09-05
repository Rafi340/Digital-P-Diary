import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function Main() {
  try {
    await mongoose.connect(config.database_url);
    console.log("Database connected successfully");
    app.listen(config.port, () => {
      console.log(`Our Application listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
Main();
