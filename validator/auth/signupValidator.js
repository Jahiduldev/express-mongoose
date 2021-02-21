const {body} =require('express-validator')


module.exports  = [
		
		body('username')
		.isLength({max: 15})
		.withMessage(`username can not be greater than 15 character`)
		.custom(async username=>{

			let user = await User.findOne({username})
			if (user) {
				return Promise.reject('Username already exists')
			}

		}),


		body('email')
		.isEmail({max: 15}).withMessage(`Email can not be greater than 15 character`)
		.custom(async email=>{

			let user = await User.findOne({email})
			if (user) {
				return Promise.reject('Email already exists')
			}

		}),


		body('password')
		.isLength({max: 15}).withMessage(`password can not be greater than 15 character`)
			
]

