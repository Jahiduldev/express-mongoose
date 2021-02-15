
const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.port||80

const adminRouter = require('./route/adminRouter');
const userRouter = require('./route/userRouter');
const contactRoutes = require('./route/contactRoutes');


// function kazi(req,res,next)
// {

// 	if (req.url==='/user') 
// 	{
// 		res.send('userMiddleware')
// 	}

// 	next();
// }




app.use(morgan('dev'))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/contacts',contactRoutes);
app.use('/admin',adminRouter);
app.use('/user',userRouter);



app.get('*',(req,res)=>{

	res.send('<h1>404 Not found</h1>')
})



app.listen(port,()=>(console.log(`http://localhost:${port}`)));


