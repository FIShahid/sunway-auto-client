import React from 'react';
import Products from '../Product/Products';
import Banner from './Banner';
import Summary from './Summary/Summary';
import Footer from  '../Shared/Footer'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>

            <Footer></Footer>
        </div>
    );
};

export default Home;