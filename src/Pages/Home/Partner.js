import React from 'react';
import bmw from '../../assets/logo/bmw.jpg'
import benz from '../../assets/logo/benz.jpg'
import toyota from '../../assets/logo/toyota.jpg'
import vw from '../../assets/logo/vw.jpg'
import audi from '../../assets/logo/audi.jpg'
import chevrolet from '../../assets/logo/chevrolet.jpg'
import honda from '../../assets/logo/honda.jpg'
import nissan from '../../assets/logo/nissan.jpg'
import porshe from '../../assets/logo/porshe.jpg'

const Partner = () => {
    return (
        <div>

             <h2 className="text-3xl text-center font-bold mt-10 mb-4">Vehicle Brands We Offer...</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={bmw} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">BMW</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={audi} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">AUDI</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={porshe} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Porshe</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={chevrolet} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Chevrolet</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={benz} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Mercedes-Benz</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={vw} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Volkswagen</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={nissan} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Nissan</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={honda} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Honda</h2>        
                    </div>                
                </div>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={toyota} alt="Shoes" class="rounded-xl w-60" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Toyota</h2>        
                    </div>                
                </div>

                
            </div>
        </div>
    );
};

export default Partner;