import product from '../models/products';

async function getProducts(req, res){
    try{
        const product = await Product.find().sort({name:1});
        res.json(products);
    
}catch(error){
    res.status(500).send ({error});
}
}
async function getProductById(req, res){
    try{
        const id = req.params.id;
        const product = await Product.findById(id);
        
        if (!product){
            return resp.status(404).json({error: 'Product not found'});
        }
        res.json(product);
}catch(error){
    res.status(500).send ({error: 'Internal Error'});
}
}
async function getProductByCategory(req, res) {
    try{

        const id = req.params.id;
        const products = await Product.find({category: id}).sort({name:1});
        if (!products) {
            return res.status(404).json({error: 'Product by category not found'});
        }
        res.json(products);
}catch(error){
    res.status(500).send ({error});
}
} 
async function createProduct(req, res) {
    try{
        const {name, description, price, stock, imagesURL, category } = req.body;
        if (!name || !description || !price || !stock || !imagesURL || !category){
            return res.status(400).json({error: 'All fields are required'});
        }
    const newProduct = await Product.create ({
        name, description, price, stock, imagesURL, category
    });

}catch(error){
    res.status(500).send ({error});
}
}
async function updateProduct(req, res){ 
    try{
        const {id}= req.params;
        const  {name, description, price, stock, imagesURL, category } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(id, {name, description, price, stock, imagesURL, category });
        if (updatedProduct) {
            return res.status(200).json(updatedProduct);
        }else {
            return res.status(404).json({error: 'Product Not Found'});
        }
} catch (error){
    res.status(500).send({error});
}}
async function deleteProduct(req, res){
    try{
        const {id}= req.params;
        const deleteProduct=await product.findByIdAndDelete(id);

        if (deleteProduct) {
            return res.status(204);
        }else {
            return res.status(404).json({error: 'Product Not Found'});

        }

}catch(error){
    res.status(500).send ({error});
}}


module.exports = {
    getProducts,
    getProductById,
    getProductByCategory,
    createProduct,
    updateProduct,
    deleteProduct
};
