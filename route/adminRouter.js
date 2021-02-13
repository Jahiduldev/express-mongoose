
const router = require('express').Router();

router.get('/login',(req,res)=>{

	console.log('hii');
	
	res.send('<h1>admin</h1>')
})


router.get('/logout/:id',(req,res)=>{
	
	res.send('user ' + req.params.id)
})


router.get('/signup',(req,res)=>{

	res.send('<h1>hi</h1>')
})

module.exports = router;

