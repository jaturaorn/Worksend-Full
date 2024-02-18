import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      require: true,
    },
    nickname: {
      type: String,
      require: true,
    },
    dateOfBirth: {
      type: Date,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
