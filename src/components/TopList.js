import React from "react";
import Link from '@mui/material/Link';
const TopList = (props) => {
    return (
        <>
            <div className="title d-flex align-items-center py-3">
                <h5 className="m-0">Best Products</h5>
                {/* <Link className="ml-auto btn btn-outline-success btn-sm" href="#">See more</Link> */}
            </div>
            <div className="pick_today">
                <div className="row">
                    {props.bestProducts.map((object, index) => (
                        <div class="col-12 col-lg-3 col-md-4 col-sm-6 mb-3">
                            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                <div class="list-card-image">
                                    <Link href={`details/${object?.slug}`} class="text-dark">
                                    {(() => {
                                        if(object.price && object.offer_price){
                                          return (
                                            <div class="member-plan position-absolute"><span class="badge m-3 badge-danger">{(((object.price - object.offer_price) / object.price) * 100).toFixed(0)}%</span></div>
                                          )
                                        }
                                    })()}
                                       <div class="p-3">
                                            <img src={process.env.REACT_APP_API_ENDPOINT + "/" + object.thumb_image} class="img-fluid item-img w-100 mb-3" alt="not found" />
                                            <h6>{object?.name}</h6>
                                            <div class="d-flex align-items-center">
                                            {(()=>{
                                              if(object.price & object.offer_price){
                                                return(
                                                    <>
                                                        <h6 class="price m-0 text-danger"><del>₹ {object?.price}</del></h6>
                                                        &nbsp;&nbsp;&nbsp;<h4 class="price m-0 text-success">₹ {object?.offer_price}</h4>
                                                    </>
                                                )
                                              }  else {
                                                return(
                                                    <>
                                                        <h6 class="price m-0 text-danger"><del>₹ {object?.price}</del></h6>
                                                    </>
                                                )
                                              }
                                            })()}   
                                                <Link data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" class="btn btn-success btn-sm ml-auto">+</Link>
                                                <div class="collapse qty_show" id="collapseExample2">
                                                    <div>
                                                        <span class="ml-auto">
                                                            <form id='myform' class="cart-items-number d-flex" method='POST'>
                                                                <input type='button' value='-' class='qtyminus btn btn-success btn-sm' field='quantity' />
                                                                <input type='text' name='quantity' value='1' class='qty form-control' />
                                                                <input type='button' value='+' class='qtyplus btn btn-success btn-sm' field='quantity' />
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

        </>
    );
}
export default TopList;
