import React from "react";
import "./Headder.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Headder() {
  return (
    <div className="App">
      <img
        className='header_logo'
        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />


      <div className='Header_search'>
        <input
          className='header_searchInput'
          type="text" />
        <SearchIcon
          className="header_searchIcon" />
      </div>


      <div className='header_nav'>
        <div className='header_option'>
          <span
            className='header_optionLineOne'>Hello Guest
          </span>
          <span
            className='header_optionLineTwo'>Sign In
          </span>
        </div>


        <div className='header_option'>
          <span
            className='header_optionLineOne'>Returns
          </span>
          <span
            className='header_optionLineTwo'>& Orders
          </span>
        </div>


        <div className='header_option'>
          <span
            className='header_optionLineOne'>Your
          </span>
          <span
            className='header_optionLineTwo'>Prime
          </span>
        </div>
        <div className='header_optionBasket'>
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo'
            className='header_count'>0
          </span>

        </div>

      </div>
    </div>
  );
}

export default Headder;
