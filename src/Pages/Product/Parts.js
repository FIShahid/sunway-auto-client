import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Parts = () => {
    const { partsId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { _id, name, img, stock, minOrder, description, price } = product;
    const [user, loading, authError] = useAuthState(auth);


    useEffect(() => {
        if (partsId) {
            const url = `http://localhost:5000/parts/${partsId}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setProduct(data))

        }
    }, []);

    const handleBooking = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mt-8 '>Purchase Now!</h2>
            <div class="hero h-screen ">
                <div class="hero-content flex-col lg:flex-row gap-10">
                    <div>
                        <img src={img} class="max-w-lg rounded-lg shadow-2xl" alt='' />
                        <div className='card-body shadow-lg bg-white'>
                            <h4 className='text-xl font-semibold'>{name}</h4>
                            <p className='font-bold'>Price: $ {price}</p>
                            <p className='font-bold'>Product Available: {stock}</p>
                            <p className='font-bold'>Minimum Order: {minOrder}</p>
                            <p className=''>{description}</p>
                        </div>
                    </div>

                    <div className='"card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100"'>
                        <div className='card-body'>
                            <h4 className='text-xl font-bold mx-auto'>Order Information</h4>
                            <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                                <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                                <input type="text" placeholder="Enter Your Address" class="input input-bordered input-lg w-full max-w-xs" />
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Enter Quantity</span>
                                    </label>
                                    <label class="input-group">
                                        <button className='btn btn-square' >
                                        <i className="fa fa-plus fa-2x"></i>
                                        </button>
                                        <input type="text" placeholder="Type Here" class="input input-bordered" />
                                        <button className='btn '>
                                        <i className="fa fa-minus fa-2x"></i>
                                        </button>                                    </label>
                                </div>
                                <input type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />


        </div>
    );
};

export default Parts;