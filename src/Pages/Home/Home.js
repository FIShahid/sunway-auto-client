import React from 'react';
import Products from '../Product/Products';
import Banner from './Banner';
import Summary from './Summary/Summary';
import Footer from  '../Shared/Footer'
import Review from './Review';
import Partner from './Partner';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Partner></Partner>
            <Summary></Summary>
            <Service></Service>

            <Footer></Footer>
        </div>
    );
};

export default Home;