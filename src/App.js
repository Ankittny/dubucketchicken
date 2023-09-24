import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import StoreRegister from "./pages/StoreRegister.js";
import ProductPage from "./pages/ProductPage.js";
import ProductDetailsPage from "./pages/ProductDetailsPage.js";
import VerifyyouPage from "./pages/VerifyyouPage.js";
import LoginPage from "./pages/LoginPage.js";
import Cart from "./pages/CartPage.js";

import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT+"api"+"/";
 
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/login" component={LoginPage} />
        <Route exact path="/store-register" component={StoreRegister} />
         <Route exact path="/:slug" component={ProductPage} />
         <Route exact path="/details/:slug" component={ProductDetailsPage} />
         <Route exact path="/verify-you/:slug" component={VerifyyouPage} />
         <Route exact path="cart/" component={Cart} />
      </Switch>
    </Router>
  );
};
export default App;
