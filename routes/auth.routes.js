const AuthController = require("../app/Http/Controllers/auth.controller");
const { authJwt } = require('../app/Http/Middleware');

module.exports = (app) =>{
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    var router = require("express").Router();
    router.post("/auth/registration", AuthController.registration);
    app.use('/api/v1', router);
}