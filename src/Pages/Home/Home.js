import React from 'react';
import Products from '../Product/Products';
import Banner from './Banner';
import Summary from './Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
        </div>
    );
};

export default Home;