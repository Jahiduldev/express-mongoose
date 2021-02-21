
const bcrypt = require('bcrypt');
const {validationResult} =require('express-validator')
const User = require('../model/User')
const errorFormatter =require('../utils/validatorErrorFormattor')


exports.signupGetController = (req,res,next)=>{

	res.render('pages/auth/signup',{title: 'create a new user', error:{}})
}

exports.signupPostController = async (req,res,next) => {

	// console.log(req.body)
	let errors = validationResult(req).formatWith(errorFormatter)
	if (!errors.isEmpty()) {

		return res.render('pages/auth/signup',{title: 'create a new user',error:errors.mapped()})
		// return console.log(errors.mapped())
	}
	let { username, email, password, confirmpassword } = req.body

	try{

		let hashPassword = await bcrypt.hash(password,11)

		let user = new User({
			username,
			email,
			password: hashPassword,
			confirmpassword

		});

		let createUser = await user.save()
	} catch(e){
		console.log(e);
		next(e)
	}
	res.render('pages/auth/signup')

}

exports.loginGetController = (req,res,next)=>{
	res.render('pages/auth/login')

}

exports.loginPostController = async (req,res,next)=>{

	

	let { email, password} = req.body

	try{

		let user = await User.findOne({email})
		if (!user) {

			return res.json({
				message: 'User Not Found'
			})

		}

		let match = await bcrypt.compare(password,user.password)
		if (!match) {

			return res.json({
				message: 'Password Not match'
			})

		}

		
	} catch(e){
		console.log(e);
		next(e)
	}

	console.log('Successfully Logged In', User)
	res.render('pages/dashboard/dashboard')

}

