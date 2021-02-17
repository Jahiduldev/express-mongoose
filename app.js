
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



app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'))



app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use('/contacts',contactRoutes);
app.use('/admin',adminRouter);
app.use('/user',userRouter);





app.get('/',(req,res)=>{
	res.render('index',{title:'this is a title'})
})

app.get('/contact',(req,res)=>{
	res.render('contact',{title:'this is a title'})
})

app.get('/about',(req,res)=>{
	res.render('about',{title:'this is a title'})
})

app.get('/protfolio',(req,res)=>{
	res.render('protfolio',{title:'this is a title'})
})
app.get('/service',(req,res)=>{
	res.render('service',{title:'this is a title'})
})

app.get('/products',(req,res)=>{
	res.render('product',{title:'this is a title'})
})





app.get('*',(req,res)=>{

	// res.send('<h1>404 Not found</h1>')
	res.render('404',{title:'Page not found'})
})



app.listen(port,()=>(console.log(`http://localhost:${port}`)));


