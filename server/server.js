import express from "express";
import cors from "cors";

import "dotenv/config";
import connectDb from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import imageRouter from "./routes/image.routes.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
  connectDb();
});
