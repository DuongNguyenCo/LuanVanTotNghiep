import db from "../models/index";

const getEmailByBusiness = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.email_tamplate.findAll({ attributes: ["id", "id_business", "name"], where: { id_business: id } });
            resolve({ status: 0, mess: "Create Successfully", data });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { getEmailByBusiness };
