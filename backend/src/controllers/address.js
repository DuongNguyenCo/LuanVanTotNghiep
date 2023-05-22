import address from "../services/address";

const getAll = async (req, res) => {
    res.status(200).json(await address.getAll(req.params.id));
};

module.exports = { getAll };
