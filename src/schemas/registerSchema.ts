import Joi from "joi";

const bodySchema = Joi.object({
    nameTeam:Joi.string().required(),
    numberContact:Joi.string().required(),
    nameLeader:Joi.string().required(),
	nameMember1: Joi.string().required(),
	nameMember2: Joi.string().required(),
	nameMember3: Joi.string().required(),
	leader: Joi.string().valid("WR", "MG", "WF", "WB", "EA", "EP").required(),
	member1: Joi.string().valid("WR", "MG", "WF", "WB", "EA", "EP").required(),
	member2: Joi.string().valid("WR", "MG", "WF", "WB", "EA", "EP").required(),
	member3: Joi.string().valid("WR", "MG", "WF", "WB", "EA", "EP").required(),
}).required().options({allowUnknown:false})

const registerSchema = Joi.object({
    body:bodySchema,
}).required().options({allowUnknown:true})


export default registerSchema;