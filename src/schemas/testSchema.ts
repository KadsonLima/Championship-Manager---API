import Joi from "joi";

const bodySchema = Joi.object({
    
    name: Joi.string().required(),
	pdfUrl: Joi.string().uri().required(),
	categoryId: Joi.number().required(),
	teacherId: Joi.number().required(),
	disciplineId: Joi.number().required(),

}).required().options({allowUnknown:false})

const testSchema = Joi.object({
    body:bodySchema,
}).required().options({allowUnknown:true})


export default testSchema;