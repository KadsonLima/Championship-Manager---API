import Joi from "joi";

const bodySchema = Joi.object({

    name:Joi.string().required().label("name is empty")

}).required().options({allowUnknown:false})

const createChampionshipInSchema = Joi.object({

    body:bodySchema,

}).required().options({allowUnknown:true})


export default createChampionshipInSchema;