import mongoose from "mongoose";

const UsersSchema = mongoose.Schema(
    {
        img: {
            type: String,
            default: "/noprofile.jpeg",
            required: false,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: false,
        },
        verified: {
            type: Boolean,
            required: false,
        },
    },
    { timestamps: true }
);

// Create the user model
const User = mongoose.model("User", UsersSchema);

export default User;