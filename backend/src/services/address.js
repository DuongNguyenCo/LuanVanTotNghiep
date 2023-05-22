import db from "../models/index";

const getAll = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.address.findAll({
                attributes: ["id", "street", "ward", "district", "city"],
                include: [
                    {
                        model: db.business,
                        attributes: ["id"],
                        where: { id: id },
                    },
                ],
            });
            resolve({ status: 0, mess: "Find All Successfully", data });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { getAll };
