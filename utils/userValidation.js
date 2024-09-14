const Joi = require('joi');

exports.authRegistrationValidate = (body) => {
    const JoiSchema = Joi.object({
        title: Joi.string().required().messages({
            "string.base": `Title should be a type of 'text'.`,
            "string.empty": `Title cannot be an empty field.`,
            "string.min": `Title should have a minimum length of 3.`,
            "any.required": `Title is a required field.`,
        }).label("Title is a required field"),
        first_name: Joi.string().required().messages({
            "string.base": `First Name should be a type of 'text'.`,
            "string.empty": `First Name cannot be an empty field.`,
            "string.min": `First Name should have a minimum length of 3.`,
            "any.required": `First Name is a required field.`,
        }),
        last_name: Joi.string().required().messages({
            "string.base": `Last Name should be a type of 'text'.`,
            "string.empty": `Last Name cannot be an empty field.`,
            "string.min": `Last Name should have a minimum length of 3.`,
            "any.required": `Last Name is a required field.`,
        }),
        email: Joi.string().email().required().messages({
            "string.base": `Email should be a type of 'text'.`,
            "string.empty": `Email cannot be an empty field.`,
            "string.min": `Email should have a minimum length of 3.`,
            "any.required": `Email is a required field.`,
        }),
        mobile_code: Joi.string().required().messages({
            "string.base": `Country Code should be a type of 'text'.`,
            "string.empty": `Country Code cannot be an empty field.`,
            "string.min": `Country Code should have a minimum length of 3.`,
            "any.required": `Country Code is a required field.`,
        }),
        mobile_number: Joi.string().required().messages({
            "string.base": `Mobile Number should be a type of 'text'.`,
            "string.empty": `Mobile Number cannot be an empty field.`,
            "string.min": `Mobile Number should have a minimum length of 3.`,
            "any.required": `Mobile Number is a required field.`,
        }),
        password: Joi.string().min(6).max(10).required().messages({
            "string.base": `Password should be a type of 'text'.`,
            "string.empty": `Password cannot be an empty field.`,
            "string.min": `Password should have a minimum length of 3.`,
            "any.required": `Password is a required field.`,
        }),
        // password_confirmation: Joi.any().equal(Joi.ref('password')).required().label('Confirm password').options({ messages: { 'any.only': '{{#label}} does not match'} })
        
    }).options({ abortEarly: false });
    return JoiSchema.validate(body)
};

