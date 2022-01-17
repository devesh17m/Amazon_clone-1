import React from "react";
import"./Home.css";
import Product from "./Product";


function Home(){
    return(
        <div className="home">
            <div className="home__container">
                <img
                className="home_image"
                src="https://m.media-amazon.com/images/I/613lGttwesL._SX3000_.jpg"  
                alt=""  
                />


                <div className="home_row">
                    <Product
                    title="Starting ₹29|Kitchen essentials"
                    
                    
                    
                    />    
                    <Product/>
                    <Product/>
                    
                </div>
                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                    
                </div>
                <div className="home_row">
                <   Product/>
                <   Product/>
                </div>    
                    




            </div>

            
        </div>
    );
}

export default Home;