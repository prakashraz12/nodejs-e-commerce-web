const express = require('express');
const ProductsRouter = require('./Routes/ProductsRoute')


const connectDatabase = require('./database/connection')

require('dotenv').config();


const productData = require('./data/products.json')
const {logData} = require('./middlewares/logger.js')

const hbs = require('hbs')

const PORT = 4000;	
const app = express();

// connect data base
connectDatabase();

// setting view engine

app.set('view engine', 'hbs')
hbs.registerPartials('./views/partials')

//serving data file

app.use(express.static('./public'))
// express.js helps to parse data in json file.
app.use(express.json())

// custom middleware
// app.use(logData)


// middelware 
// app.use('./api/products',logData)

//routes

app.get('/',(req,res)=>{
	res.render('index',{title:'online Store',productData});
})

app.get('/products', (req,res)=>{
	res.render('index',{title:'online Store',productData});
})
app.use('/api/products',ProductsRouter);

// erroe handling
app.get('*',(req, res)=>{
	res.status(404).send('sorry page not found')
})
app.listen(PORT,()=>{
	console.log(`server started at port ${PORT}`)
})

