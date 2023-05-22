import candidate from "../services/candidate";

let login = async (req, res) => {
    const data = await candidate.login(req.body);
    res.cookie("refreshToken", data.token.refreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
    });
    res.status(200).json(data);
};

let register = async (req, res) => {
    res.status(200).json(await candidate.register(req.body));
};

module.exports = { login, register };
