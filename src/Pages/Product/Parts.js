import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Parts = () => {
    const { partsId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { _id, name, img, description, seller, stock, price } = product;


    useEffect(() => {
        if (partsId) {
            const url = `http://localhost:5000/parts/${partsId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))
                
        }
    }, []);


    return (
        <div>
            <h2>Manage Part</h2>
            <img src={product.img} alt="" />
          
        </div>
    );
};

export default Parts;