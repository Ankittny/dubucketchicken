import React, { useState } from "react";
import Link from '@mui/material/Link';
import postApi from "../Model/postApi.js";
import { useDispatch} from "react-redux";
import { fetchCart } from "../store/Cart";
import { useHistory } from 'react-router-dom';


const ProductList = (props) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const addToCart = (id) => {
        setIsLoading(true);
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth!=null) {
            const uri = `token=${auth.access_token}&product_id=${id}&quantity=${"1"}`;
            postApi
                .addToCard(uri)
                .then((res) =>
                    console.log(res),
                    setIsLoading(false), 
                )
                .catch((err) => {
                    setIsLoading(false);
                    console.log(
                        err.response &&
                        err.response.data.message &&
                        err.response.data.message
                    );
                });
                dispatch(fetchCart());
        } else {
            history.push("/login")
        }
    };


    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="osahan-listing">
                                <div className="d-flex align-items-center mb-3">
                                    <h4>{[props.CategoryData?.name]}</h4>
                                    <div className="m-0 text-center ml-auto">
                                        <Link href="#" data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1"></i> Filter</Link>
                                        <Link href="#" data-toggle="modal" data-target="#exampleModal" className="btn text-muted bg-white"><i className="icofont-signal mr-1"></i> Sort</Link>
                                    </div>
                                </div>
                                <div className="row">
                                    {props.ProductList.map((object) => (
                                        <div className="col-6 col-lg-3 col-md-12 mb-3">
                                            <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                                <div className="list-card-image">

                                                    {(() => {
                                                        if (object.price && object.offer_price) {
                                                            return (
                                                                <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">{(((object.price - object.offer_price) / object.price) * 100).toFixed(0)}%</span></div>
                                                            )
                                                        }
                                                    })()}
                                                    <div className="p-3">
                                                        <Link href={`details/${object?.slug}`} className="text-dark">
                                                            <img src={process.env.REACT_APP_API_ENDPOINT + object?.thumb_image} className="img-fluid item-img w-100 mb-3" alt="title" />
                                                            <h6>{object?.short_name}</h6>
                                                        </Link>
                                                        <div className="d-flex align-items-center">
                                                            {(() => {
                                                                if (object.price && object.offer_price) {
                                                                    return (
                                                                        <p class="text-muted mb-2 price"><span class="offer-price">₹{object?.offer_price}</span> <del class="text-danger mr-1">₹{object?.price}</del> </p>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <p class="text-muted mb-2"><span class="offer-price">₹{object?.price}</span></p>
                                                                    )
                                                                }
                                                            })()}
                                                            <button onClick={() => addToCart(object?.id)} className="btn btn-success btn-sm ml-auto"> {isLoading ? 'Loading...' : 'Add +'}</button>
                                                            <div className="collapse qty_show" id="collapseExample1">
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

                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ProductList;