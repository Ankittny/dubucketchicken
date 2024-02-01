import React, { useState, useEffect } from "react";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import postApi from "../Model/postApi.js";
import { Helmet } from "react-helmet";

const RefundandCancellation = () => {
return (
    <>
        <Helmet>
            <title>Dubucket Food & Beverage - Fast Delivery Refund and cancellation</title>
        </Helmet>
        <Header />
        <section className="py-1 osahan-main-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 p-4   shadow-sm">
                        <div className="osahan-home-page">
                            <div className="osahan-body">
                                <section class="py-2 osahan-main-body">
                                    <div class="container-fluid">
                                        <div class="row">

                                            <div class="col-md-12 col-sm-12 col-lg-12">
                                                {/* <h2>About US </h2> */}

                                                <h3>Dubucket - Refund and Cancellation Policy</h3>

                                                <p>Effective Date: January 1, 2024</p>

                                               <p> At Dubucket, we strive to provide a seamless and satisfying experience for our customers. To ensure clarity and transparency, we have outlined our Refund and Cancellation Policy below.</p>

                                                <p>Refund Policy:</p>

                                                <p>Same-Day Delivery Refunds:</p>

                                               <p> If you encounter any issues with your order upon delivery, such as damaged or incorrect items, please contact us immediately.
                                                We offer a refund for the same day of delivery if the issue is reported within a reasonable time frame after the delivery.
                                                Refunds will be processed through the original payment method.</p>
                                                <h4>Cancellation Refunds:</h4>

                                                <p>For cancellations made before the order is out for delivery, a full refund will be initiated.
                                                Refunds for cancellations will be processed through the original payment method.</p>
                                               <h4> Refund Process:</h4>

                                                <p>To request a refund, please contact our customer support at dubucket@gmail.com within the specified time frame.
                                                Provide order details and a brief explanation of the issue.
                                                Refunds will be processed promptly, but please allow a reasonable amount of time for the transaction to reflect on your account.</p>
                                              <h4>  Cancellation Policy:</h4>

                                               <p>Cancellation before Handover to Delivery Boy:

                                            If you wish to cancel your order before it is handed over to the delivery boy, please contact us at the earliest opportunity.
                                                Cancellations made within this time frame will be processed, and a full refund will be initiated.</p>
                                               <h4> Cancellation after Handover to Delivery Boy:</h4>

                                               <p> Once the order is handed over to the delivery boy, cancellations may not be possible.
                                                In such cases, customers are encouraged to utilize our refund policy for any issues encountered upon delivery.</p>
                                               <h4> Cancellation Process:</h4>

                                                <p>To request a cancellation, please contact our customer support at dubucket@gmail.com as soon as possible.
                                                Provide order details and a brief explanation of the cancellation request.
                                                Our team will assess the feasibility of cancellation based on the order's current status.</p>
                                               <h4> Contact Information:</h4>

                                               <p> For any refund or cancellation inquiries, please reach out to us at dubucket@gmail.com. We are committed to resolving issues promptly and ensuring customer satisfaction.

                                                Dubucket reserves the right to modify or update this Refund and Cancellation Policy as necessary. Any changes will be communicated through our website or direct customer communication.

                                                Thank you for choosing Dubucket. We appreciate your trust in our services.</p>

                                            </div>

                                        </div>
                                    </div>
                                </section>

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
export default RefundandCancellation;
