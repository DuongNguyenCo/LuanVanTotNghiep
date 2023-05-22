import email from "../services/email_tamplate";

const getEmailByBusiness = async (req, res) => {
    res.status(200).json(await email.getEmailByBusiness(req.params.id));
};

module.exports = { getEmailByBusiness };
