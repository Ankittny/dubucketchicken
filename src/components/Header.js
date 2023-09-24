import React, { useState, useEffect } from "react";
import Link from '@mui/material/Link';
import {useSelector} from "react-redux";

const Header = () => {
   const { cart } = useSelector((state) => state.cart);
   const [getCarts, setGetCarts] = useState(null);
    useEffect(() => {
      cart && setGetCarts(cart.cartProducts);
    }, [cart]);


    console.log(getCarts);

   return (
      <>
         <div className="bg-white shadow-sm osahan-main-nav">
            <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
               <Link className="navbar-brand mr-0" href="/">
                  <img className="img-fluid logo-img" src="../assets/img/logo.png" alt="title" />
               </Link>
               <div className="ml-3 d-flex align-items-center">
                  <div className="dropdown mr-3">
                     <Link className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div><i className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i></div>
                        <div>
                           <p className="text-muted mb-0 small">Select Location</p>
                           Modinagar India...
                        </div>
                     </Link>
                     {/* <div className="dropdown-menu osahan-select-loaction p-3" aria-labelledby="navbarDropdown">
                     <span>Select your city to start shopping</span>
                     <form className="form-inline my-2">
                        <div className="input-group p-0 col-lg-12">
                           <input type="text" className="form-control form-control-sm" id="inlineFormInputGroupUsername2" placeholder="Search Location" />
                           <div className="input-group-prepend">
                              <div className="btn btn-success rounded-right btn-sm"><i className="icofont-location-arrow"></i> Detect</div>
                           </div>
                        </div>
                     </form>
                     <div className="city pt-2">
                        <h6>Top Citys</h6>
                        <p className="border-bottom m-0 py-1"><Link href="#" className="text-dark">Banglore</Link></p>
                        <p className="border-bottom m-0 py-1"><Link href="#" className="text-dark">Noida</Link></p>
                        <p className="border-bottom m-0 py-1"><Link href="#" className="text-dark">Delhi</Link></p>
                        <p className="m-0 py-1"><Link href="#" className="text-dark">Mumbai</Link></p>
                     </div>
                  </div> */}
                  </div>
                  <div className="input-group mr-sm-2 col-lg-12">
                     <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Search for Products.." />
                     <div className="input-group-prepend">
                        <div className="btn btn-success rounded-right"><i className="icofont-search"></i></div>
                     </div>
                  </div>
               </div>
               <div className="ml-auto d-flex align-items-center">
                  {(() => {
                     const auth = JSON.parse(localStorage.getItem('auth'));
                     if (auth==null) {
                        return (
                           <Link href="/login" className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
                             <i className="icofont-login"></i>
                           </Link>
                        )
                     } else {
                        return (
                           <Link href="/" className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
                             <i className="icofont-user"></i>
                           </Link>
                        )
                     }
                  })()}
                  
                  <div className="dropdown">
                     <Link href="#" className="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">
                        </i>
                     </Link>
                     <div className="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main" aria-labelledby="dropdownMenuNotification">
                        <div className="osahan-notifications bg-white border-bottom p-2">
                           <div className="position-absolute ml-n1 py-2"><i className="icofont-check-circled text-white bg-success rounded-pill p-1"></i></div>
                           <Link href="status_complete.html" className="text-decoration-none text-dark">
                              <div className="notifiction small">
                                 <div className="ml-3">
                                    <p className="font-weight-bold mb-1">Yay! Order Complete</p>
                                    <p className="small m-0"><i className="icofont-ui-calendar"></i> Today, 05:14 AM</p>
                                 </div>
                              </div>
                           </Link>
                        </div>
                        <div className="osahan-notifications bg-white border-bottom p-2">
                           <Link href="status_onprocess.html" className="text-decoration-none text-muted">
                              <div className="notifiction small">
                                 <div className="ml-3">
                                    <p className="font-weight-bold mb-1">Yipiee. order Success</p>
                                    <p className="small m-0"><i className="icofont-ui-calendar"></i> Monday, 08:30 PM</p>
                                 </div>
                              </div>
                           </Link>
                        </div>
                        <div className="osahan-notifications bg-white p-2">
                           <Link href="status_onprocess.html" className="text-decoration-none text-muted">
                              <div className="notifiction small">
                                 <div className="ml-3">
                                    <p className="font-weight-bold mb-1">New Promos Coming</p>
                                    <p className="small m-0"><i className="icofont-ui-calendar"></i> Sunday, 10:30 AM</p>
                                 </div>
                              </div>
                           </Link>
                        </div>
                     </div>
                  </div>
                  <Link href="#" className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
                     <i className="icofont-shopping-cart"><span className="cart-items-show">4</span></i>
                  </Link>
               </div>
            </nav>

         </div>

      </>
   );
}

export default Header;