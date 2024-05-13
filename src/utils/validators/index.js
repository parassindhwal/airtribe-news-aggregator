const Joi = require("joi");

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
            .email({ tlds: { allow: false }})
            .required(),
    password: Joi.string().required(),
    preferences: Joi.array().items(Joi.string()).required()
});

const loginSchema = Joi.object({
    email: Joi.string()
            .email({ tlds: { allow: false }})
            .required(),
    password: Joi.string().strict()
});

const validateRegistration = (req, res, next) => {
    const result = registerSchema.validate(
        req.body,
        { abortEarly: false }, //return all the errors
    );

    if(result.error) {
        return res.status(400).json({ 
            message: "Invalid request data",
            error: result.error.details.map((err) => err.message)
        });
    }
    
    //if no error, then continue the registration
    next();
};

const validateLogin = (req, res, next) => {
    const result = loginSchema.validate(
        req.body,
        { abortEarly: false }, //return all the errors
    );

    if(result.error) {
        return res.status(400).json({ 
            message: "Invalid request data",
            error: result.error.details.map((err) => err.message)
        });
    }
    
    //if no error, then continue the registration
    next();
};

module.exports = {
    validateRegistration: validateRegistration,
    validateLogin: validateLogin
}