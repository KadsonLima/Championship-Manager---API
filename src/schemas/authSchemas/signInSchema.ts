import Joi from "joi";

const bodySchema = Joi.object({

    email:Joi.string().email().required(),

    password:Joi.string().required()

}).required().options({allowUnknown:false})

const signInSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default signInSchema;