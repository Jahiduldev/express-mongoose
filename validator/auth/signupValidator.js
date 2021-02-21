const {body} =require('express-validator')
const User = require('../../model/User')

module.exports  = [
		
		 body('username')
		.isLength({min:2,max: 15})
		.withMessage(`username can not be greater than 15 character`)
		.custom(async username=>{

			let user = await User.findOne({username})
			if (user) 
			{
				return Promise.reject('Username already exists')
			}

		}).trim(),


		 body('email')
		.isEmail({max: 15}).withMessage(`Email can not be greater than 15 character`)
		.custom(async email=>{

			let user = await User.findOne({email})
			if(user) 
			{
				return Promise.reject('Email already exists')
			}
		}).normalizeEmail(),

		body('password')
	   .isLength({min:8,max: 15}).withMessage(`password should be 8 character`),

	    body('confirmpassword')
	   .isLength({min:8,max: 15}).withMessage(`password should be 8 character`)
			
			
]

