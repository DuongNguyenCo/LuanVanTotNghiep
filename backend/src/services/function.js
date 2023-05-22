import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();



export const hashPassword = async (pass) => {
    return await bcrypt.hash(pass, 10);
};
export const checkPassword = (passInput, passDB) => {
    return bcrypt.compareSync(passInput, passDB);
};
export const accessToken = (data) => {
    return jwt.sign(data, process.env.ACCESS_TOKEN, { expiresIn: "30s" });
};

export const refreshToken = (data) => {
    return jwt.sign(data, process.env.REFREST_TOKEN, { expiresIn: "365d" });
};

