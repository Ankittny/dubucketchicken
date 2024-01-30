import React, { useState, useEffect } from "react";
import Link from '@mui/material/Link';
import { useSelector } from "react-redux";

const Header  = () => {
const [SearchData, SetSearch] = useState("");
const carts = useSelector((state) => state.cart);
const { loading, error, cartItems } = carts;
  // console.log("this is test",cartItems[0].qty);


const HandleSearch = (event) => {
   SetSearch(event.target.value);
}

const Seacrh = () => {
   const URl = "http://dubucket.com/"+"search?search="+SearchData;
   window.location.href=URl
}


   return (
      <>
         <div className="bg-white shadow-sm osahan-main-nav">
             
      <div class=" container-fluid">
         <div class="row">
               <div class="col-lg-2 dn_logo">
               <div class="webAppLogo">
               <Link className="navbar-brand mr-0" href="/">
                  <img className="img-fluid logo-img" src="../assets/img/logo.png" alt="title" />
               </Link>                  
               </div>
               </div>
               <div class="col-lg-2 dn_loc">
               <div class="wenAppLoc">
               <Link className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div><i className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i></div>
                        <div>
                           <p className="text-muted mb-0 small">Select Location</p>
                           Modinagar India...
                        </div>
                     </Link>
               </div>
               </div>
               <div class="col-lg-5 dn_srch">
               <div class="wenAppSeArch">
               <input onChange={HandleSearch} type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Search for Products.." />
               <button class="btnSeaRchItem" onClick={Seacrh}><i className="icofont-search"></i></button>
                   
               </div>
               </div>
               <div class="col-lg-3 dn_cart">
               <div class="webAppCartItem">
               <div className="login">
                  {(() => {
                     const auth = JSON.parse(localStorage.getItem('auth'));
                     if (auth==null) {
                        return (
                           <Link href="/login" className="anchor_login mr-2 mr-3 text-dark cofont-size">
                             <span class="login_txt">Login</span>
                             <span class="login_icon"><i className="icofont-user"></i></span>
                             {/* <i className="icofont-login"></i> */}
                           </Link>
                        )
                     } else {
                        return (
                           <Link href="/myaccount" className="anchor_login mr-3 text-dark cofont-size">
                             <span class="loginn_txt">My Account</span>
                             <span class="login_icon"><i className="icofont-user"></i></span>                              
                               
                           </Link>
                        )
                     }
                  })()}
                  
                  

                  
                  {loading ? (
                        <p>{loading}</p>
                      ) : error ? (
                        <p>{error}</p>
                      ) : cartItems.length === 0 ? (
                     <>
                     <Link href="/cart" className="mycart anchor_caRt">
                     <i className="icofont-shopping-cart">
                        <span className="cart-items-show">0 items</span>
                     </i>
                     
                     <div class="item-cart">₹ 0</div>
                     </Link>
                     </>   
                     ) : (

                        <>
                        <Link href="/cart" className="mycart anchor_caRt">
                        <i className="icofont-shopping-cart">
                        <span className="cart-items-show">{cartItems[0]?.qty} items</span>
                     </i>
                     <div class="item-cart">₹ {cartItems[0]?.total}</div>
                     </Link>
                     </> 
                  )}
               

               </div>                  
               </div>
               </div>
            </div>
            </div>
           
         </div>

      </>
   );
}

export default Header;