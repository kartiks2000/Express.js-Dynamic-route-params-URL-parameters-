// Importing model and saving data in the model.

const productmodel = require('../models/product'); 

const adding = (req,res,next)=>{
    // Instansiating Models's class
    const newproduct = new productmodel(req.body.proname);
    // saving new product
    newproduct.save();
    // productsname.push(req.body.proname);
    res.redirect('/products');
}

const deleting = (req,res,next)=>{
    productmodel.delit(req.params.name); 
    res.redirect('/products');   
}

module.exports = {
    'adding':adding,
    'deleting':deleting,
}
