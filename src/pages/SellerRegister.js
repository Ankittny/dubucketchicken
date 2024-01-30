import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from '@mui/material/Link';
import UserLogin from "../components/UserLogin.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const SellerRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [uploadLogo, setUploadLogo] = useState(null);
    const [email, setEmail] = useState("");
    const [checked, setCheck] = useState(false);
    const [phone, setPhone] = useState("");
    const [pincode, setPinCode] = useState("");
    const [shopName, setName] = useState("");
    const [shopAddress, setAddress] = useState("");
    const [errors, setErrors] = useState(null);
    let [uploadProgress, setProgress] = useState(0);
    const [coverImg, setCoverImg] = useState(null);
    const [logoImg, setLogoImg] = useState(null);
    const [uploadCoverImg, setUploadCoverImg] = useState(null);

    const logoImgChangHandler = (e) => {
        if (e.target.value !== "") {
            const imgReader = new FileReader();
            imgReader.onload = (event) => {
                setLogoImg(event.target.result);
            };
            imgReader.readAsDataURL(e.target.files[0]);
            setUploadLogo(e.target.files[0]);
        }
    };

    const rememberMe = () => {
        setCheck(!checked);
    };
    const coverImgChangHandler = (e) => {
        if (e.target.value !== "") {
            const imgReader = new FileReader();
            imgReader.onload = (event) => {
                setCoverImg(event.target.result);
            };
            imgReader.readAsDataURL(e.target.files[0]);
            setUploadCoverImg(e.target.files[0]);
        }
    };


    const HandlerName = (e) => {
        setName(e.target.value);
    }
    const HandlerEmail = (e) => {
        setEmail(e.target.value);
    }
    const HandlerPhone = (e) => {
        setPhone(e.target.value);
    }
    const HandlerAddress = (e) => {
        setAddress(e.target.value);
    }
    const HandlerPincode = (e) => {
        setPinCode(e.target.value);
    }



    const sellerReq = async () => {
        setIsLoading(true);
        const auth = JSON.parse(localStorage.getItem('auth'));
        if (auth != null) {
            const formData = new FormData();
            formData.append("banner_image", uploadCoverImg);
            formData.append("shop_name", shopName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("address", shopAddress);
            formData.append("pincode", pincode);
            formData.append("open_at", "06.00AM");
            formData.append("closed_at", "10.00PM");
            formData.append("agree_terms_condition", checked);
            formData.append("logo", uploadLogo);
            const options = {
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    let percent = Math.floor((loaded * 100) / total);
                    setProgress(percent);
                },
            };
            console.log(auth);
            await axios
                .post(
                    `${process.env.REACT_APP_API_ENDPOINT}api/user/seller-request?token=${auth.access_token
                    }`,
                    formData,
                    options
                )
                .then((res) => {
                    setIsLoading(false);
                    toast.success(
                        "Congratulation Your seller request successfully delivered"
                    );

                    // apiRequest.logout(auth.access_token);
                    // localStorage.removeItem("auth");
                    // dispatch(fetchWishlist());
                    // dispatch(fetchCart());
                    window.location.href = "/";
                })
                .catch((err) => {
                    setIsLoading(false);
                    setErrors(err.response && err.response.data.errors);
                    if (err.response && err.response.data.notification) {
                        toast.error(
                            err.response.data.notification
                        );
                    }
                });
        } else {
            setIsLoading(false);
            toast.warn("Please Login First");
            window.location.href = "/login";
            //router.push("/login");

        }
    };


    return (
        <>
            <Helmet>
                <title>Dubucket Food & Beverage - Fast Delivery About</title>
            </Helmet>
            <Header />


            {(() => {

                const auth = JSON.parse(localStorage.getItem('auth'));
                if (auth == null) {
                    return (
                        < UserLogin />
                    )
                } else {
                    return (
                        <section className="osahan-main-body">
                            <div className="container">
                                <div className="row d-flex align-items-center justify-content-center vh-100">

                                    <div className="col-lg-6 pl-lg-5">
                                        <div className="osahan-signup shadow bg-white p-4 rounded">
                                            <div className="p-3">
                                                <h2 className="my-0">Let's get started</h2>
                                                <p className="small mb-4">Create account to see our top picks for you!</p>

                                                {/* {isSuccess ? (
                    <div class="alert alert-success">
                      <strong>{isSuccess}!</strong>.
                    </div>
                  ) : (
                    ""
                  )} */}



                                                <div className="form-group">
                                                    <label for="exampleInputName1">Email</label>
                                                    <input placeholder="Enter Name"
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputName1"
                                                        aria-describedby="emailHelp"
                                                        onChange={HandlerEmail}
                                                    />
                                                    {errors && Object.hasOwn(errors, "email") ? (
                                                        <span className="text-sm mt-1 text-qred">
                                                            {errors.email[0]}
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputNumber1">Phone Number</label>
                                                    <input placeholder="Enter Phone Number"
                                                        type="number"
                                                        className="form-control"
                                                        id="exampleInputNumber1"
                                                        aria-describedby="emailHelp"
                                                        onChange={HandlerPhone}

                                                    />
                                                    {errors && Object.hasOwn(errors, "phone") ? (
                                                        <span className="text-sm mt-1 text-qred">
                                                            {errors.phone[0]}
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Shop Name*</label>
                                                    <input placeholder="Enter Shop Name*"
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="ShopName"
                                                        value={shopName}
                                                        onChange={HandlerName}
                                                    />

                                                    {errors && Object.hasOwn(errors, "shop_name") ? (
                                                        <span className="text-sm mt-1 text-qred">
                                                            {errors.shop_name[0]}
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>

                                                <div className="form-group">
                                                    <label for="exampleInputPassword2">Address</label>
                                                    <input placeholder="Enter Shop Address"
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputPassword2"
                                                        onChange={HandlerAddress}
                                                    />

                                                    {errors && Object.hasOwn(errors, "address") ? (
                                                        <span className="text-sm mt-1 text-qred">
                                                            {errors.address[0]}
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword2">City Pincode</label>
                                                    <input placeholder="Enter city pincode"
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputPassword2"
                                                        onChange={HandlerPincode}
                                                    />

                                                    {errors && Object.hasOwn(errors, "address") ? (
                                                        <span className="text-sm mt-1 text-qred">
                                                            {errors.address[0]}
                                                        </span>
                                                    ) : (
                                                        ""
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword2">Update Logo</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="exampleInputPassword2"
                                                        onChange={(e) => logoImgChangHandler(e)}
                                                    />

                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword2">Update Cover</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="exampleInputPassword2"
                                                        onChange={(e) => coverImgChangHandler(e)}
                                                    />

                                                </div>

                                                <div class="form-check">
                                                    <input
                                                        //   onChange={handleAgree}
                                                        className="form-check-input"
                                                        type="checkbox" value="1"
                                                        id="flexCheckChecked"
                                                        onClick={rememberMe}
                                                    />
                                                    <label className="form-check-label" for="flexCheckChecked">
                                                        agree all terms and condition in dubucket
                                                    </label>
                                                </div>
                                                <button

                                                    onClick={sellerReq}
                                                    disabled={
                                                        email &&
                                                            checked &&
                                                            coverImg &&
                                                            logoImg &&
                                                            phone &&
                                                            shopName &&
                                                            shopAddress &&
                                                            logoImg &&
                                                            coverImg
                                                            ? false
                                                            : true
                                                    }
                                                    type="submit" className="btn btn-success rounded btn-lg btn-block">
                                                    {isLoading ? 'Loading...' : 'Create Account'}
                                                </button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            })()}
            <Footer />
        </>
    );
}


export default SellerRegister;
