import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products , setProducts] = useState([]);
    

    useEffect(()=>{
        const url = 'http://localhost:5000/parts'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setProducts(data.slice(0,6)))
    },[])
    return (
        <div >
            <h2 className='text-3xl font-bold text-center mt-12 mb-8'>Our Products: {products.length}</h2>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                products.map(product =><Product
                key={product._id}
                product={product}
                
                ></Product>)
            }
           </div>
        </div>
    );
};

export default Products;
