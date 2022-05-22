import React from 'react';
import Product from '../Product/Product';
import Banner from './Banner';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Summary></Summary>
        </div>
    );
};

export default Home;