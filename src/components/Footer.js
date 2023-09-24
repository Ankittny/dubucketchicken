import React from "react";
import Link from '@mui/material/Link';
const Footer = () => {
    return (
        <>
       
         <footer className="section-footer border-top bg-white">
            <section className="footer-top py-4">
               <div className="container">
                  <div className="row">
                     <div className="col-md-4">
                        <form>
                           <div className="input-group">
                              <input type="text" placeholder="Email" className="form-control" name="" />
                              <span className="input-group-append">
                                 <button type="submit" className="btn btn-success"> Subscribe</button>
                              </span>
                           </div>
                        </form>
                     </div>
                     <div className="col-md-8 text-md-right">
                        <Link href="#" className="btn btn-icon btn-light"><i className="icofont-facebook"></i></Link>
                        <Link href="#" className="btn btn-icon btn-light"><i className="icofont-twitter"></i></Link>
                        <Link href="#" className="btn btn-icon btn-light"><i className="icofont-instagram"></i></Link>
                        <Link href="#" className="btn btn-icon btn-light"><i className="icofont-youtube"></i></Link>
                     </div>
                  </div>
               </div>
            </section>
            <section className="footer-main border-top pt-5 pb-4">
               <div className="container">
                  <div className="row">
                     <aside className="col-md">
                        <h6 className="title">Products</h6>
                        <ul className="list-unstyled list-padding">
                           <li> <Link href="listing.html" className="text-dark">Listing</Link></li>
                           <li> <Link href="product_details.html" className="text-dark">Detail</Link></li>
                           <li> <Link href="picks_today.html" className="text-dark">Trending</Link></li>
                           <li> <Link href="recommend.html" className="text-dark">Recommended</Link></li>
                           <li> <Link href="fresh_vegan.html" className="text-dark">Most Popular</Link></li>
                        </ul>
                     </aside>
                     <aside className="col-md">
                        <h6 className="title">Checkout Process</h6>
                        <ul className="list-unstyled list-padding">
                           <li> <Link href="cart.html" className="text-dark">Cart</Link></li>
                           <li> <Link href="cart.html" className="text-dark">Order Address</Link></li>
                           <li> <Link href="cart.html" className="text-dark">Delivery Time</Link></li>
                           <li> <Link href="cart.html" className="text-dark">Order Payment</Link></li>
                           <li> <Link href="checkout.html" className="text-dark">Checkout</Link></li>
                           <li> <Link href="successful.html" className="text-dark">Successful</Link></li>
                        </ul>
                     </aside>
                     <aside className="col-md">
                        <h6 className="title">My Order</h6>
                        <ul className="list-unstyled list-padding">
                           <li> <Link href="my_order.html" className="text-dark">My order</Link></li>
                           <li> <Link href="status_complete.html" className="text-dark">Status Complete</Link></li>
                           <li> <Link href="status_onprocess.html" className="text-dark">Status on Process</Link></li>
                           <li> <Link href="status_canceled.html" className="text-dark">Status Canceled</Link></li>
                           <li> <Link href="review.html" className="text-dark">Review</Link></li>
                        </ul>
                     </aside>
                     <aside className="col-md">
                        <h6 className="title">My Account</h6>
                        <ul className="list-unstyled list-padding">
                           <li> <Link className="text-dark" href="my_account.html"> My account</Link></li>
                           <li> <Link className="text-dark" href="promos.html"> Promos</Link></li>
                           <li> <Link className="text-dark" href="my_address.html"> My address</Link></li>
                           <li> <Link className="text-dark" href="terms_conditions.html"> Terms &amp; conditions</Link></li>
                           <li> <Link className="text-dark" href="help_support.html"> Help &amp; support</Link></li>
                           <li> <Link className="text-dark" href="help_ticket.html"> Help ticket</Link></li>
                           <li> <Link className="text-dark" href="signin.html"> Logout</Link></li>
                        </ul>
                     </aside>
                     <aside className="col-md">
                        <h6 className="title">Extra Pages</h6>
                        <ul className="list-unstyled list-padding">
                           <li><Link href="promo_details.html" className="text-dark"> Promo Details </Link></li>
                           <li><Link href="terms_conditions.html" className="text-dark"> Conditions </Link></li>
                           <li><Link href="help_support.html" className="text-dark"> Help Support </Link></li>
                           <li><Link href="refund_payment.html" className="text-dark"> Refund Payment </Link></li>
                           <li><Link href="faq.html" className="text-dark"> FAQ </Link></li>
                           <li><Link href="signin.html" className="text-dark"> Sign In </Link></li>
                        </ul>
                     </aside>
                  </div>
               </div>
            </section>
            <section className="footer-bottom border-top py-4">
               <div className="container">
                  <div className="row">
                     <div className="col-md-6">
                        <span className="pr-2">© 2023 Dubucket</span>
                        <span className="pr-2"><a href="privacy.html" className="text-dark">Privacy</a></span>
                        <span className="pr-2"><a href="terms%26conditions.html" className="text-dark">Terms & Conditions</a></span>
                     </div>
                     <div className="col-md-6 text-md-right">
                        <Link href="#"><img src="img/app" height="30" alt="not found" /></Link>
                        <Link href="#"><img src="img/playmarket.png" height="30" alt="not found" /></Link>
                     </div>
                  </div>
               </div>
            </section>

         </footer>
        </>
    );
}
export default Footer;