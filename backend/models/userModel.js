import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  adhar: { type: Number, required: true },
  phone: { type: Number, required: true },
  pmKisanCode: { type: Number, required: true },
  gmail: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
