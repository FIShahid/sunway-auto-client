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

    const [input, setInput] = useState(0)
    const inputValue = e => {
        e.preventDefault()

        setInput(e.target.value);

    }

    const increaseStock = id => {
        console.log(input);
        const newStock = (stock + parseInt(input));
        if (isNaN(newStock)) {
            setError("Input a Number")
            return
        }
        else {
            setError('')
        }
        console.log(parseFloat(newStock));
        const update = { ...product, stock: newStock }
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setProduct({ ...product, stock: newStock })
                

            })

    }

    const decreaseStock = id => {
        console.log(input);
        const newStock = (stock - parseInt(input));
        if (isNaN(newStock)) {
            setError("Input a Number")
            return
        }
        else {
            setError('')
        }
        console.log(parseFloat(newStock));
        const update = { ...product, stock: newStock }
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                setProduct({ ...product, stock: newStock })
                

            })

    }


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

                                <input type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                                <div class="form-control">
                            <label class="label">
                                <span class="label-text">Increase Quantity</span>
                            </label>
                            <label class="input-group">
                                <input onChange={inputValue} type="text" placeholder="0.01" class="input input-bordered" />
                                <p>{error}</p>
                                <button  onClick={() => increaseStock(_id)} class="btn">Increase</button>
                            </label>
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Decrease Quantity</span>
                            </label>
                            <label class="input-group">
                                <input type="text" placeholder="0.01" class="input input-bordered" />
                                <button onClick={() => decreaseStock(_id)} class="btn">Decrease</button>
                            </label>
                        </div>
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