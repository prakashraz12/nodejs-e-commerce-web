const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
	title:{
		type: String,
		required:true,
		minLength: [10, 'the title length should be at least 10 characters'],
		maxLength: [250, 'the title shoul not be more than 250 cahraters'],
		
		//  for coustom validation 

	},
	price:{
		type:Number,
		required:[true,'price required'],
		min:[1, 'min length should be 1']
	},
	category: String,
	image:String,
	rating:{
		rate:String,
		count:Number
	}

})


//  model 


const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;