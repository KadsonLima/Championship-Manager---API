import Joi from "joi";

const bodySchema = Joi.object({

    name:Joi.string().required().label("name is empty"),
    description:Joi.string().required().label("description is empty"),
    tagId:Joi.number().required().label("tag is empty"),
    expId:Joi.number().required().label("exp is empty")

}).required().options({allowUnknown:false})

const createjobsInSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createjobsInSchema;