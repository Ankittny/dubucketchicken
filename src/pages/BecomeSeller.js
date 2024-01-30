import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from '@mui/material/Link';

const BecomeSeller = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
           <>
           
            <Helmet>
                <title>Dubucket Food & Beverage - Fast Delivery About</title>
            </Helmet>
            <Header />



            <section className="py-4 osahan-main-body">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden mt-3">
                                <div className="card-header bg-white border-0 p-0" id="headingtwo">
                                    <h2 className="mb-0">
                                        <div className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0" type="button" data-toggle="collapse" data-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
                                            Sell on Dubucket <Link href="/seller-register" className="text-decoration-none btn btn-success ml-auto">
                                                Start Sell Now</Link>
                                        </div>
                                    </h2>
                                </div>
                                <div className="card-body p-0 border-top">
                                    <div className="osahan-order_address">
                                        <div className="p-3 row">
                                            <div className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio" id="hidecart">
                                                <label className="custom-control-label w-100" for="customRadioInline">
                                                    <div>
                                                        <div className="p-3 bg-white rounded shadow-sm w-100">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <p className="mb-0 h6">sdfdsf</p>
                                                                <p className="mb-0 badge badge-success ml-auto">

                                                                </p>
                                                            </div>
                                                            <p className="small text-muted m-0">sdfsdf</p>
                                                            <p className="small text-muted m-0">dsfdsf</p>
                                                            <p className="pt-2 m-0 text-right">

                                                            </p>
                                                        </div>
                                                        <span className="btn btn-light border-top btn-lg btn-block"> Deliver Here </span>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
}


export default BecomeSeller;
