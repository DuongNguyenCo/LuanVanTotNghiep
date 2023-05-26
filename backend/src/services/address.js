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

const newAddress = (address) => {
    return new Promise(async (resolve, reject) => {
        const a = address.address.street.split(" ");
        const b = a.map((e) => {
            return e.replace(e.charAt(0), e.charAt(0).toUpperCase());
        });
        const data = await db.address.findOrCreate({
            where: {
                id_business: address.id_business,
                city: address.address.city,
                district: address.address.district,
                ward: address.address.ward,
                street: b.join(" "),
            },
        });
        if (data[1]) resolve({ status: 0, mess: "Create Successfully", data: data[0] });
        else resolve({ status: -1, mess: "Create Failed" });
    });
};

module.exports = { getAll, newAddress };
