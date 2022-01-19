import React from "react";
import "./Product.css";
function Product ({title,image1,image2,image3,image4,category1,category2,category3,category4}){
    return (
        <div className="product">
            <div className="product_info"> <strong>{title} </strong>
            
             </div>

            <div className="product_image">
                    
                   <div className="img"><img 
                    src={image1}
                    alt=""
                    />
                    <p className="Product_Category">
                        <small>{category1}</small> </p></div>
                        
            
            
                    <img   
                    src={image2}
                    alt=""/>
                    
                    <p className="Product_Category"><small>{category2}</small> </p>
                    
            </div>
            <div className="product_image">     
                    <img 
                    src={image3}
                    alt=""
                    />
                    <p className="Product_Category">
                        <small>{category3}</small> </p>
            
                     
                    <img  
                    src={image4}
                    alt=""
                    />
                    <p className="Product_Category">
                        <small>{category4}</small> </p>


            </div>           
         </div>
    
    
    
     );
}


export default Product;
