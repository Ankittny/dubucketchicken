import React from "react";
import Verifyyou from "../components/Verifyyou.js";
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Helmet } from "react-helmet";
import { useParams } from 'react-router-dom';
const VerifyyouPage = () => {
    const { slug } = useParams();
  return (
    <>
      <Header />
      <Helmet>
        <title>Dubucket-verify-you</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Verifyyou EmailId={slug} />
      <Footer />
    </>

  );
}
export default VerifyyouPage;
