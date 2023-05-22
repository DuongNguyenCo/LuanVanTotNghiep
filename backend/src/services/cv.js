import db from "../models/index";

const apply = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.cv.findAll();
        } catch (e) {
            reject(e);
        }
    });
};
