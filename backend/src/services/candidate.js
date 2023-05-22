import { where } from "sequelize";
import db from "../models/index";
import { hashPassword, checkPassword, refreshToken, accessToken } from "./function";
let login = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.candidate.findOne({
                where: { email: payload.email },
                attributes: ["id", "first_name", "last_name", "password"],
                raw: true,
            });
            if (data) {
                const result = checkPassword(payload.password, data.password);
                const { password, ...other } = data;
                const aToken = accessToken(other);
                const rToken = refreshToken(other);
                if (result) {
                    resolve({
                        status: 0,
                        mess: "Login Successfully",
                        data: { ...other, accessToken: aToken },
                        token: { refreshToken: rToken },
                    });
                } else resolve({ status: 1, mess: "Incorrect information" });
            } else {
                resolve({ status: -1, mess: "Not Found" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let register = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.candidate.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    password: await hashPassword(payload.password),
                },
            });
            if (data[1]) {
                resolve({ status: 0, mess: "Create Successfully" });
            } else {
                resolve({ status: -1, mess: "User Already Exists" });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { login, register };
