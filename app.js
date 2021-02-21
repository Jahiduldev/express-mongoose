
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv/config');


const app = express();
const port = process.env.PORT||80

const authRoutes = require('./route/authRoute');
const adminRouter = require('./route/adminRouter');
const userRouter = require('./route/userRouter');
const contactRoutes = require('./route/contactRoutes');

//Setup View Engine
app.set('view engine','ejs')
app.set('views','views')

//Middleware Array
const middleware = [

	morgan('dev'),
	express.static('public'),
	express.urlencoded({extended:true}),
	express.json()
]
app.use(middleware);



let Schema = mongoose.Schema
let testSchema = new Schema({
	name:String
})

let Test = mongoose.model('Test',testSchema)



app.use('/auth',authRoutes);
app.use('/contacts',contactRoutes);
app.use('/admin',adminRouter);
app.use('/user',userRouter);

app.get('/',(req,res)=>{

	res.render('index',{title:'this is a title'})

	// let test = new Test({ name:'Jahidul Islamddd' })
	// test.save()
	
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



mongoose.connect(
	process.env.DB_CONNECTION_STRING,{
	useNewUrlParser: true, useUnifiedTopology: true
})
.then(()=>{

	console.log('Database Connected');
})
.catch(e=> {

})

app.listen(port,()=>(console.log(`http://localhost:${port}`)));


