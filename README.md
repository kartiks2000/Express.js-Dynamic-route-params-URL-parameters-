# Express.js-Dynamic-route-params-URL-parameters-
Express.js Dynamic route params (URL parameters)


We will implement a feature to delete a product when use user clicks on delete button.

We will pass the product name as a parameter with the url in the request from whwere we could fetch it and then delete it.

href="/del/<%= product.title %>" 

we will recieve this request as-: 

route("/del/:name",(req,res,next)=>{

  console.log(req.params.name);
  
});

Then we could parameter as fetch it as "req.params.name"


// We also implemented a "delit()" function in the model to delete the product
