import React from 'react';
import bg2 from '../../assets/logo/bg2.jpg'

const Service = () => {
    return (
        <div className="mt-6 mb-6">
            <h2 className="mt-6 mb-6 text-center font-bold text-3xl">Your One-Stop Vehicle Parts and Accessories Partner</h2>
            <div class=" hero min-h-screen " 
            style={{  background:`url(${bg2}) no-repeat `   }} >
                <div class="  hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Auto Parts Sourcing</h1>
                        <p class="mb-5">Our experts are high-skilled and passionate about vintage autos and their maintenance parts. When you present us with an auto part request, they will identify it and source it for you at a fair price through our auto industry partners.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;