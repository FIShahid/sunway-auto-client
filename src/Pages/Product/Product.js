import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, stock, minOrder, description, price } = product;

    const navigate = useNavigate()
    const navigateToParts =id =>{
        navigate(  `/parts/${_id}`)
    }
    return (
        <div >
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <h4 className='px-12 mt-4 text-xl font-bold text-info'>{name}</h4>
                <h5 className='text-warning font-bold px-12'>Price: ${price}</h5>
                <h5 className='text-black font-bold px-12'>Available Stock: {stock}</h5>
                <h5 className='text-error font-bold px-12'>Minimum Order: ${minOrder}</h5>
                
                    <p className='px-12'>Description: {description}</p>
                <div class="card-body items-center text-center">
                    <div class="card-actions">
                        <button onClick={()=>navigateToParts(_id)} class="btn btn-primary w-60">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;