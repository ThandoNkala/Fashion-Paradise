
import mongoose from "mongoose";

const UseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
      
})

const User = mongoose.models.User || mongoose.model("User", UseSchema);

export default User;