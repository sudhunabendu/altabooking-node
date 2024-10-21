const { authRegistrationValidate } = require("../../utils/userValidation");
const User = require("../../app/Models/users.model")
const UserDetail = require("../../app/Models/userDetails.model");
const mongoose = require('mongoose');
const dbHelpers = require('../../libraries/dbHelpers');

class AuthController {
    constructor() { }


    async registration(req, res) {
        let data = req.body;
        if (!data || Object.keys(data).length == 0) {
            res.status(200).send({
                res_code: 201,
                response: "Parameter is missing!"
            });
            return;
        }
        let responseData = authRegistrationValidate(data);
        if (responseData.error) {
            const errorMessage = responseData.error.details;
            if (errorMessage) {
                const errorMessages = errorMessage.map(err => err.message);
                return res.status(200).json({
                    res_code: 201,
                    response: errorMessages
                });
            }
        }else{
            const session = await mongoose.startSession();
            session.startTransaction();
            const opts = { session };
            try {
                const user = await User.create(req.body);
                console.log(user);
                let code = dbHelpers.uniqueCode(8, 'ab_user_details', 'ab_user_code');
                let genetate = user.first_name + '-' + user.last_name + '-' + code;
                let link = dbHelpers.generateURL('ab_user_details', 'user_link', genetate, 0);

                await UserDetail.create({user_link : link, user_id: user._id }, opts);
                // await UserDetail.create({...req.body, user_id: user._id }, opts);
                res.status(200).send({
                    res_code: 200,
                    response: "User registration successful!"
                });

                await session.commitTransaction();

            } catch (error) {
                await session.abortTransaction();
                res.send({
                    res_code: 201,
                    response: error.message
                })
                
            } finally {
                session.endSession();
            }
        }

    }


}

module.exports = new AuthController();