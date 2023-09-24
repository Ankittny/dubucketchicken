import React from "react";
import Link from '@mui/material/Link';


const RelatedProducts = (props) => {
    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <h5 className="mt-3 mb-3">Maybe You Like this.</h5>
                    <div className="row">

                    {props.RelatedData.map((object) =>(
                        <div className="col-sm-3 col-md-3 mb-3">
                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div className="list-card-image">
                                    <Link href={`${object?.slug}`} className="text-dark">
                                        <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
                                        <div className="p-3">
                                            <img src={process.env.REACT_APP_API_ENDPOINT+object?.thumb_image} className="img-fluid item-img w-100 mb-3" alt="title-images" />
                                            <h6>{object?.short_name}</h6>
                                            <div className="d-flex align-items-center">
                                                        {(() => {
                                                            if(object.price && object.offer_price){
                                                                return (
                                                                    <p class="text-muted mb-2"><del class="text-danger mr-1">₹ {object?.price}</del> ₹{object?.offer_price} </p>
                                                                    )
                                                            } else {
                                                                return (
                                                                    <p class="text-muted mb-2">₹ {object?.price}</p>
                                                                ) 
                                                            }
                                                        })()}   
                                                <Link data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className="btn btn-success btn-sm ml-auto">+</Link>
                                                <div className="collapse qty_show" id="collapseExample3">
                                                    <div>
                                                        <span className="ml-auto" href="#">
                                                            <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                                                <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                                                <input type='text' name='quantity' value='1' className='qty form-control' />
                                                                <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                                            </form>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default RelatedProducts;