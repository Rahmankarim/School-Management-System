import mongoose from "mongoose";
import { iUser } from "../Interface/iUser";

interface userDoc extends mongoose.Document {
    name: string,
    phoneNumber: string,
    email: string;
    password: string;
    role: string; 
}

interface iUserModel extends mongoose.Model<userDoc> {
    build(attr: iUser): userDoc;
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: 
    {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
});

userSchema.statics.build = (attr: iUser) => {
    return new userModel(attr);
};

const userModel = mongoose.model<userDoc, iUserModel>('users', userSchema);

export { userModel };
