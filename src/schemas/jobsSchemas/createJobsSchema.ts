import Joi from "joi";

const bodySchema = Joi.object({

    name:Joi.string().required().label("name is empty"),
    description:Joi.string().required().label("description is empty"),
    tags:Joi.array().required(),
    exps:Joi.array().required()

}).required().options({allowUnknown:false})

const createjobsInSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createjobsInSchema;
