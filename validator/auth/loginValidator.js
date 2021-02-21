const {body} =require('express-validator')
const User = require('../../model/User')

module.exports  = [
		
		 body('email')
		.isEmail({max: 15}).withMessage(`Email can not be greater than 15 character`)
		.custom(async email=>{

			let user = await User.findOne({email})
			if(!user) 
			{
				return Promise.reject('Email is not exists')
			}
		}).normalizeEmail(),

		body('password')
	   .isLength({max: 15}).withMessage(`password can not be greater than 15 character`)
			
]

