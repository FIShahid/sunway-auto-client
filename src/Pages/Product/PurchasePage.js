import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';


const PurchasePage = () => {

    const { partsId } = useParams()
    const [product, setProduct] = useState({});
    const [error, setError] = useState('');
    const { _id, name, img, stock, minOrder, description, price } = product;
    const [user, loading, authError] = useAuthState(auth);

    const [newQuantity, setNewQuantity] = useState('')

    console.log(parseInt(newQuantity))

    const newparsedQuantity = parseInt(newQuantity)

   
    

    const [purchase, setPurchase] = useState([]);

    const minParsedQuantity = parseInt(minOrder)
    const availableParsedQuantity = parseInt(stock)


    useEffect(() => {
        const url = `https://thawing-fortress-89625.herokuapp.com/parts/${partsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    const handleQuantityChange = (event) => {

        const quantity = event.target.value;
        console.log(quantity)



        setNewQuantity(quantity)
    }

    const handleQuantity = (event) => {
        event.preventDefault()

        const address = event.target.address.value
        const phone = event.target.phone.value

        const orders = {
            orderId:_id,
            partsName: name,
            userName: user.displayName,
            userEmail: user.email,
            orderQuantity: minOrder,
            pricePerUnit: price,
            address: address,
            phone: phone,

        }


        // post to server

        fetch('https://thawing-fortress-89625.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(orders)

        })

            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('You have successfully placed your Order ')
                }
            })


    }
    let showErrorMessage
    if (newparsedQuantity < minParsedQuantity) {
        showErrorMessage = <p className='text-red-500 text-sm absolute'>Please type minimum Order</p>
    }

    if (newparsedQuantity > availableParsedQuantity) {
        showErrorMessage = <p className='text-red-500 text-sm absolute'>Not available</p>
    }


    return (
        <div className='w-2/3 mx-auto'>
            <div className="hero lg:w-max-lg bg-base-100">
                <div className="hero-content text-left flex-col gap-5 lg:flex-row ">
                    <img src={img} className=" rounded-lg shadow-2xl" alt="" />
                    <div>



                        <form onSubmit={handleQuantity} action="">
                            <h1 className="text-2xl font-bold text-info ">{name}</h1>
                            <p className="py-1 font-bold">Your Name : {user.displayName} </p>
                            <p className="py-1 font-bold">Your Email : {user.email} </p>
                            <p className="py-1 text-purple-600">Minimum order : {minOrder}</p>
                            <input type="number" name="quantity" placeholder='Type Order Quantity' id="" onChange={handleQuantityChange} required />
                            {showErrorMessage}
                            <br /><br />
                            <p className="py-1 text-green-700">Available order : {stock} </p>
                            <p className="py-1 text-warning font-bold">Price per Unit : $ {price} </p><br />
                            <input type="text" name="address" placeholder='Type address' id="" required /><br /><br />
                            <input type="number" name="phone" placeholder='Type phone' id="" required /><br /><br />
                            <input disabled={newparsedQuantity < minParsedQuantity || newparsedQuantity > availableParsedQuantity} className="btn btn-sm" type="submit" value=" Place Order" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;