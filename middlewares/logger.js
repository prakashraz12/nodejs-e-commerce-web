const logData = (req,res,next)=>{
	console.log('this is middleware function')
	next();
}


module.exports = {logData}