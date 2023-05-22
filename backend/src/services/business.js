import db from "../models/index";
import { checkPassword, accessToken, refreshToken } from "./function";
const getAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.business.findAll({
                attributes: ["id", "name", "img", "description"],
                include: [
                    { model: db.address, attributes: ["id", "city"] },
                    { model: db.post, attributes: ["id"] },
                    { model: db.candidate, attributes: ["id"] },
                ],
            });
            resolve({ status: 0, mess: "Find All Successfully", data });
        } catch (e) {
            reject(e);
        }
    });
};

const getById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.business.findOne({
                attributes: ["id", "name", "img", "description"],
                include: [
                    { model: db.address, attributes: ["id", "city"] },
                    {
                        model: db.post,
                        attributes: ["id", "createdAt"],
                        include: [
                            {
                                model: db.job,
                                attributes: ["name", "salary_min", "salary_max"],
                                include: [
                                    {
                                        model: db.language,
                                        attributes: ["id", "name"],
                                    },
                                    {
                                        model: db.address,
                                        attributes: ["id", "city"],
                                    },
                                ],
                            },
                        ],
                    },
                    { model: db.candidate, attributes: ["id"] },
                ],
                where: { id: id },
            });
            resolve({ status: 0, mess: "Find All Successfully", data });
        } catch (e) {
            reject(e);
        }
    });
};

const signIn = (business) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.business.findOne({
                where: { email: business.email },
                raw: true,
            });
            if (data) {
                const checkPass = checkPassword(business.password, data.password);
                if (checkPass) {
                    const { id, email, password, ...other } = data;
                    const tokenAccess = accessToken({ id, email });
                    const tokenRefresh = refreshToken({ id, email });
                    resolve({
                        isBusiness: 1,
                        status: 0,
                        mess: "Successful Search",
                        data: { ...other, id, email },
                        tokenAccess,
                        tokenRefresh,
                    });
                } else {
                    resolve({
                        status: 1,
                        mess: "Incorrect information",
                    });
                }
            }
            resolve({
                status: -1,
                mess: "Business doesn't exist",
            });
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = { getAll, getById, signIn };
