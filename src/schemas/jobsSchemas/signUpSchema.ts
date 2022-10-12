import Joi from "joi";

const bodySchema = Joi.object({
    name:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    confirm_password:Joi.valid(Joi.ref('password')).required()
}).required().options({allowUnknown:false})

const signUpSchema = Joi.object({
    body:bodySchema,
}).required().options({allowUnknown:true})


export default signUpSchema;