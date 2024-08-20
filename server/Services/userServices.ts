import { userModel } from "../Database/Model/userModel";
import {stdModel}  from "../Database/Model/stdModel"

class userServices {
    async getUserByEmail(email: string) {
        try {
            const userData = await userModel.findOne({ email });
            return userData;
        } catch (error) {
            throw error;
        }
    }

    async getUserByRollNo(rollNo: string)
    {
        try {
            const userData = await stdModel.findOne({ rollNo });
            return userData;
        } catch (error) {
            throw error;
        }
    }
    
}

export const userServicesInstance = new userServices();
