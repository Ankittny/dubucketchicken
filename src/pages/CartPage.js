import React, { useState } from "react";
import Cart from "../components/Cart.js";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Loader from './Loader';
import { Helmet } from "react-helmet";



const CartPage = () => {
   const [isLoading, setIsLoading] = useState();
   setIsLoading(true);
//   useEffect(() => {
//     axios.get('/')
//       .then((response) => {
//         if (response.status === 200 || response.status === 201 || response.status === 'ok') {
//           setIsLoading(false); // loading false
//           setCategory(response.data.homepage_categories)
//           setbestProducts(response.data.bestProducts);
//           if (response.data.sliderVisibilty === true) {
//             setBanner(response.data.sliders);
//           }
//         } else {
//           alert("false");
//         }
//       })
//       .catch((error) => {
//         console.log('the catch error is ===>', error)
//       })
//   }, []);

  return (
    <>
      <Helmet>
        <title>Dubucket-Cart</title>
      </Helmet>
      <Header />
      <section className="py-4 osahan-main-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="osahan-home-page">
                <div className="osahan-body">
                  {(() => {
                    if (isLoading === false) {
                      return (
                        < Loader />
                      )
                    } else {
                      return (
                        <>
                          <Cart />
                        </>
                      )
                    }

                  })()}
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
export default CartPage;
