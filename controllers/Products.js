const Product = require('../model/Model')


const getAllProductsStatic = async(req,res)=>{

    try{


        const products = await Product.find()
    res.status(200).json(products);
    
    
    }
    catch(err){
    console.log({msg : err})
    }



}



const getAllProducts =async(req,res)=>{

try{

const {featured, company, name, sort, fields, numericFilters}=req.query;



    const products = await Product.find()
res.status(200).json(products);


}
catch(err){
console.log({msg : err})
}

}





module.exports={
    getAllProducts,
    getAllProductsStatic,
};