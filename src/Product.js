import React from "react";
import "./Product.css";
function Product ({title}){
    return (
        <div className="product">
            <div className="product_info"> <strong>{title} </strong>
            
             </div>

            <div className="product_image">
                    
                   <div className="img"><img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_1._SY116_CB647230943_.jpg"/>
                    <p className="Product_Category">
                        <small>Cookware</small> </p></div>
            
            
                    <img   
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_4._SY116_CB647230943_.jpg"/>
                    <p className="Product_Category"><small>Storage jars & containers</small> </p>
            </div>
            <div className="product_image">     
                    <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_3._SY116_CB647230943_.jpg"/>
                    <p className="Product_Category">
                        <small>Chopper & more tools</small> </p>
            
                     
                    <img  
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/JanART22/GW/PC/186x116_2._SY116_CB647230943_.jpg"/>
                    <p className="Product_Category">
                        <small>Gasstoves</small> </p>


            </div>           
         </div>
    
    
    
     );
}


export default Product;
