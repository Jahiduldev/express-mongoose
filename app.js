
const express = require('express');
const app = express();
const port = process.env.port||80

const adminRouter = require('./route/adminRouter');
const userRouter = require('./route/userRouter');



// function kazi(req,res,next)
// {

// 	if (req.url==='/user') 
// 	{
// 		res.send('userMiddleware')
// 	}

// 	next();
// }



app.use('/admin',adminRouter);
app.use('/user',userRouter);



app.get('*',(req,res)=>{

	res.send('<h1>404 Not found</h1>')
})



app.listen(port,()=>(console.log(`http://localhost:${port}`)));


