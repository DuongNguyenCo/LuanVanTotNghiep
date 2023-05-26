import { Op } from "sequelize";
import db from "../models/index";

let getAll = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.post.findAll({
                attributes: ["id", "createdAt"],
                include: [
                    { model: db.business, attributes: ["id", "name", "img"] },
                    {
                        model: db.job,
                        attributes: ["id", "name", "salary_min", "salary_max"],
                        include: [
                            { model: db.language, attributes: ["id", "name"] },
                            { model: db.address, attributes: ["id", "city"] },
                        ],
                    },
                ],
            });
            resolve({
                status: 0,
                mess: "Find All Successfully",
                data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.post.findOne({
                attributes: ["id", "createdAt"],
                include: [
                    {
                        model: db.business,
                        attributes: ["id", "name", "img", "description", "benefit"],
                    },
                    {
                        model: db.job,
                        attributes: ["id", "name", "salary_min", "salary_max", "description", "request"],
                        include: [
                            { model: db.language, attributes: ["id", "name"] },
                            {
                                model: db.address,
                                attributes: ["id", "street", "ward", "district", "city"],
                            },
                        ],
                        where: { name: id },
                    },
                ],
            });
            resolve({
                status: 0,
                mess: "Find All Successfully",
                data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

let getRelate = (language) => {
    return new Promise(async (resolve, reject) => {
        try {
            const c = language.split(",");
            const data1 = await db.job.findAll({
                attributes: ["id"],
                include: [
                    {
                        model: db.language,
                        attributes: ["id"],
                        where: { id: { [Op.in]: c } },
                    },
                ],
                limit: 5,
                nest: true,
            });
            const a = data1?.map((e) => {
                return e.id;
            });
            const data = await db.post.findAll({
                attributes: ["id", "createdAt"],
                include: [
                    { model: db.business, attributes: ["id", "name", "img"] },
                    {
                        model: db.job,
                        attributes: ["id", "name"],
                        include: [
                            {
                                model: db.language,
                                attributes: ["id", "name"],
                            },
                        ],
                        where: { id: a },
                    },
                ],
                nest: true,
            });
            resolve({
                status: 0,
                mess: "Find All Successfully",
                data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllByIdBusiness = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.post.findAll({
                attributes: ["id", "expire"],
                include: [
                    { model: db.business, attributes: ["id", "email"], where: { id: id } },
                    {
                        model: db.job,
                        attributes: ["id", "name"],
                        include: [
                            { model: db.language, attributes: ["id", "name"] },
                            { model: db.address, attributes: ["id", "city"] },
                        ],
                    },
                    { model: db.service, attributes: ["id", "name"] },
                    { model: db.candidate, attributes: ["id"], as: "apply" },
                ],
            });
            resolve({
                status: 0,
                mess: "Find All Successfully",
                data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllByIdPost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.post.findOne({
                attributes: ["id"],
                include: [
                    {
                        model: db.candidate,
                        attributes: ["id", "first_name", "last_name"],
                        include: [{ model: db.cv, attributes: ["id", "file"] }],
                        as: "apply",
                    },
                ],
                where: { id: id },
            });

            resolve({
                status: 0,
                mess: "Find All Successfully",
                data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const getAllPostByID = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = await db.post.findAll({
                attributes: ["id", "createdAt"],
                include: [
                    { model: db.job, attributes: ["id", "name"] },
                    { model: db.business, attributes: ["id"], where: { id: id } },
                ],
            });
            resolve({
                status: 0,
                mess: "Find All Successfully",
                data,
            });
        } catch (e) {
            reject(e);
        }
    });
};

const updateStep = (post) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { step1, step2, step3, step4, step5 } = post.step;
            const data = await db.post.update(
                {
                    step1: step1,
                    step2: step2,
                    step3: step3,
                    step4: step4,
                    step5: step5,
                },
                { where: { id: post.id_post } }
            );
            resolve({
                status: 0,
                mess: "Update Successfully",
            });
        } catch (e) {
            reject(e);
        }
    });
};

const updateService = (post) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { defaultService, optionService } = post.service;

            await db.post_service.create({
                id_service: defaultService,
                id_post: post.id_post,
            });
            if (optionService !== 0) {
                await db.post_service.create({
                    id_service: optionService,
                    id_post: post.id_post,
                });
            }
            resolve({
                status: 0,
                mess: "Update Successfully",
            });
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = { getAll, getById, getRelate, getAllByIdBusiness, getAllByIdPost, getAllPostByID, updateStep, updateService };
