import React from "react";
import Link from '@mui/material/Link';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProductDetails = (props) => {
   let images = props.gallery;
   var obj2 = { id: 100, product_id: 37, image: props.ProductDetail.thumb_image, status: 1, created_at: 234234345, updated_at: 2345345 };
   images.push(obj2);
   const responsive = {
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
         slidesToSlide: 1, // optional, default to 1.
      },
   };
   return (
      <>
         <nav aria-label="breadcrumb" class="breadcrumb mb-0">
            <div class="container">
               <ol class="d-flex align-items-center mb-0 p-0">
                  <li class="breadcrumb-item"><Link href="/" class="text-success">Home</Link></li>
                  <li class="breadcrumb-item active" aria-current="page">{props.CategoryName?.name}</li>
               </ol>
            </div>
         </nav>

         <section className="py-4 osahan-main-body">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">

                     <Carousel
                        className="recommend-slider mb-3"
                        responsive={responsive}
                        showIndicators={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                     >
                        {images.map((object, i) => (
                           <div className="osahan-slider-item" key={i} >
                              <img src={process.env.REACT_APP_API_ENDPOINT + object.image} className="img-fluid mx-auto shadow-sm rounded" alt="Responsive-imagess" />
                           </div>
                        ))}
                     </Carousel>
                  </div>
                  <div className="col-lg-6">
                     <div className="p-4 bg-white rounded shadow-sm">
                        <div className="pt-0">
                           <h2 className="font-weight-bold">{props.ProductDetail?.name.charAt(0).toUpperCase() + props.ProductDetail?.name.slice(1)}</h2>
                           {(() => {
                              if (props.ProductDetail?.price !== "" && props.ProductDetail?.offer_price !== "") {
                                 return (
                                    <>
                                       <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                                          Product MRP : <b className="h6 text-dark m-0"><del class="text-danger mr-1"> ₹ {props.ProductDetail?.price}</del></b>
                                       </p>
                                       <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                                          Sale Price : <b className="h6 text-dark m-0"> ₹ {props.ProductDetail?.offer_price}</b>
                                          <span className="badge badge-danger ml-2">{(((props.ProductDetail?.price - props.ProductDetail?.offer_price) / props.ProductDetail?.price) * 100).toFixed(0)}% OFF</span>
                                       </p>
                                    </>
                                 )
                              } else {
                                 return (
                                    <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                                       Product MRP : <b className="h6 text-dark m-0">₹ {props.ProductDetail?.price}</b>
                                    </p>
                                 )
                              }

                           })()}


                           <Link href="#">
                              <div className="rating-wrap d-flex align-items-center mt-2">
                                 <ul className="rating-stars list-unstyled">
                                    <li>
                                       <i className="icofont-star text-warning"></i>
                                       <i className="icofont-star text-warning"></i>
                                       <i className="icofont-star text-warning"></i>
                                       <i className="icofont-star text-warning"></i>
                                       <i className="icofont-star"></i>
                                    </li>
                                 </ul>
                                 <p className="label-rating text-muted ml-2 small"> ({props?.TotalReciewQty} Reviews)</p>
                              </div>
                           </Link>
                        </div>
                        <div className="pt-2">
                           <div className="row">
                              <div className="col-6">
                                 <p className="font-weight-bold m-0">Delivery</p>
                                 <p className="text-muted m-0">Free</p>
                              </div>
                              <div className="col-6 text-right">
                                 {(() => {
                                    if (props.ActiveVariants.length > 0) {
                                       return (
                                          <>
                                             <p className="font-weight-bold m-0">Available in:</p>
                                             <p className="text-muted m-0">
                                                {props.ActiveVariants.map((object) => (
                                                   <span>{object.name},</span>
                                                ))}
                                             </p>
                                          </>
                                       )
                                    }
                                 })()}
                              </div>
                           </div>
                        </div>
                        <div className="details">
                           <div className="pt-3 bg-white">
                              <div className="d-flex align-items-center">
                                 <div className="btn-group osahan-radio btn-group-toggle" data-toggle="buttons">

                                    {props.ActiveVariants.map((object) => (
                                       <label className="btn btn-secondary active">
                                          <input type="radio" value={object?.price} name="options" id="option1" checked /> {object?.name}
                                          &nbsp;₹{object?.price}

                                       </label>
                                    ))}
                                 </div>
                                 <Link className="ml-auto" href="#">
                                    <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                    </form>
                                    <Link href="#" className="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-sm"><i className="icofont-plus m-0 mr-2"></i>ADD</Link>
                                 </Link>
                              </div>
                           </div>
                           <div className="pt-3">

                              <p className="font-weight-bold mb-2">Product Details</p>
                              <p className="text-muted small mb-0">{props.ProductDetail.short_description}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default ProductDetails;