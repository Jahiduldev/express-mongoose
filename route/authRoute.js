
const router = require('express').Router();
const user = require('../model/User')
const signupValidator = require('../validator/auth/signupValidator')
const loginValidator = require('../validator/auth/loginValidator')

const {
	signupGetController,
	signupPostController,
	loginGetController,
	loginPostController

} = require('../controller/authController')



router.get('/signup',signupGetController)
router.post('/signup',signupValidator, signupPostController)
router.get('/login' ,loginGetController)
router.post('/login' ,loginValidator,loginPostController)
// router.get('/logout',logoutController)

module.exports = router;