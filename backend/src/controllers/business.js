import business from "../services/business";

const getAll = async (req, res) => {
    res.status(200).json(await business.getAll());
};

const getById = async (req, res) => {
    res.status(200).json(await business.getById(req.params.id));
};

const signIn = async (req, res) => {
    res.status(200).json(await business.signIn(req.body));
};

module.exports = { getAll, getById, signIn };
