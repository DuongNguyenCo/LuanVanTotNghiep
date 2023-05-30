import express from "express";
import candidate from "../controllers/candidate";
import post from "../controllers/post";
import business from "../controllers/business";
import typejob from "../controllers/typejob";
import language from "../controllers/language";
import address from "../controllers/address";
import job from "../controllers/job";
import email from "../controllers/email_tamplate";
import service from "../controllers/service";
import cv from "../controllers/cv";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        res.send("BACHEND DNCJOB LAM LUAN VAN TOT NGHIEP");
    });

    //candidate
    router.post("/api/v2/candidate/signIn", candidate.login);
    router.post("/api/v2/candidate/signUp", candidate.register);

    //post
    router.get("/api/v2/post/getall", post.getAll);
    router.get("/api/v2/post/getById/:id", post.getById);
    router.get("/api/v2/post/getRelate", post.getRelate);
    router.get("/api/v2/post/getAllByIdBusiness/:id", post.getAllByIdBusiness);
    router.get("/api/v2/post/getAllPostByID/:id", post.getAllPostByID);
    router.get("/api/v2/post/getAllCandidateByIdPost/:id", post.getAllByIdPost);
    router.get("/api/v2/post/getAllExpire/:id", post.getAllExpireByIdBusiness);
    router.get("/api/v2/post/getAllHidden/:id", post.getAllHiddenByIdBusiness);
    router.put("/api/v2/post/updateStep", post.updateStep);
    router.put("/api/v2/post/updateService", post.updateService);

    //job
    router.post("/api/v2/job/create", job.create);

    //business
    router.get("/api/v2/business/getall", business.getAll);
    router.get("/api/v2/business/getById/:id", business.getById);
    router.post("/api/v2/business/signIn", business.signIn);
    router.post("/api/v2/business/signUp", business.signUp);

    //type
    router.get("/api/v2/typejob/gettall", typejob.getAll);

    //language
    router.get("/api/v2/language/gettall", language.getAll);

    //address
    router.get("/api/v2/address/gettall/:id", address.getAll);
    router.post("/api/v2/address/create", address.newAddress);

    //email_tamplates
    router.get("/api/v2/email/getByIdBusiness/:id", email.getEmailByBusiness);

    //service
    router.get("/api/v2/service/getByIdBusiness/:id", service.getAllByBusiness);

    //cv
    router.post("/api/v2/cv/apply", cv.apply);

    return app.use("/", router);
};

export default initWebRoutes;
