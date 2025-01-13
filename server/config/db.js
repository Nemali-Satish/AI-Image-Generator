import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on(`connected`, () => {
    console.log(`Connected to DB : ${mongoose.connection.host}`);
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
};

export default connectDb;
