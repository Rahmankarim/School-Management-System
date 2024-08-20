import mongoose, { CallbackError } from "mongoose";
import { iStd } from "../Interface/iStd";
import bcrypt from "bcrypt";

interface stdDoc extends mongoose.Document {
    rollNum: string;
    name: string;
    email: string;
    phoneNumber: string;
    department: string;
    semester: number;
    section: string;
    cgpa: number;
    attendance: number;
    password: string;
    role: string;
}

interface iStdModel extends mongoose.Model<stdDoc> {
    build(attr: iStd): stdDoc;
}

const stdSchema = new mongoose.Schema({
    rollNum: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
    section: {
        type: String,
        required: true,
    },
    cgpa: {
        type: Number,
        required: true,
    },
    attendance: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
        default: "12345",
    },
    role: {
        type: String,
        required: true,
    }
});

// Middleware to hash the password before saving
stdSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err as CallbackError);  // Cast err to CallbackError
    }
});

stdSchema.statics.build = (attr: iStd) => {
    return new stdModel(attr);
};

const stdModel = mongoose.model<stdDoc, iStdModel>('Student Data', stdSchema);

export { stdModel };
