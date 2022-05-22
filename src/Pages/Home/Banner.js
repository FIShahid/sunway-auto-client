import React from 'react';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import banner4 from '../../assets/banner/banner4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" /> /

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">


                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='text-4xl font-bold text-white '>Welcome to Sunway Auto Parts</h1>

                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='text-4xl font-bold text-white '>OEM and Aftermarket
                                Auto Parts Wholesale</h1>

                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='text-4xl font-bold text-white '>Auto, Truck, and Motorcycle Parts B2B Supplier</h1>

                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full" /> /
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div>
                            <h1 className='text-4xl font-bold text-white '>OE Specification
Auto Parts</h1>

                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;