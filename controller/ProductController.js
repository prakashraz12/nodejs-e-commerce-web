const ProductModel = require("../models/productModel.js");

// const returnAllProducts = async (req,res)=>{
// const {category}=req.query;
// if(category){
// const filterProd = productData.filter((product)=>{
// return product.category === category
// })
// if(filterProd.length !== 0){
// res.json(filterProd)
// }else{
// res.send('Sorry category not found')
// }
//
// }else{
// res.json(productData)
// }
const returnAllProducts = async (req, res) => {
  try {
    const productData = await ProductModel.find();
    res.json(productData);
  } catch (e) {
    res.send("error occured");
  }
};

// }

const singleProduct = async (req, res) => {
  const { productID } = req.params;
  try {
    const productData = await ProductModel.findById(productID);
    res.json(productData);
  } catch (e) {
    res.send("error occured");
  }
};

// createProducts = (req, res) => {
//   console.log(req.body);
//   res.send("POST");
// };
// 
const CreateProduct = async (req,res)=>{
	try{
		const product = await ProductModel.create(req.body);
		res.json(product)
	}catch (e){
		console.log(e)
		res.send('error occured')
	}
};


const updateProduct = async (req, res) => {
	const{ productID} = req.params;
	try{
		const product = await ProductModel.findByIdAndUpdate(productID, req.body,{new:true})
		res.json(product)
	}catch (e) {
		res.send('error occured')
	}
};
const deleteProduct = async (req, res) => {
	const {productID} = req.params;
	try{
		const product = await ProductModel.findByIdAndDelete(productID)
		res.json(product)
	}catch (e) {
		res.json('error occured')
	}
};

module.exports = {
  returnAllProducts,
  singleProduct,
  CreateProduct,
  updateProduct,
  deleteProduct,
};
