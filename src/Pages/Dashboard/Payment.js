import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L3OwHE2YnlVDJArhdE6Dd01vyUGWpd3dyjD48S7Mokp5q7nuygHhV4nU9XrZaObZ8eQEiscrcN4PCTKRGGCzPYu00e8HGmBXc');


const Payment = () => {

    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`
    const { data: orders, isLoading } = useQuery(['orders', id], () => fetch(url, {
        method: 'GET',

    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(orders)


    // calculation total Price
    const perUnitPrice = parseInt(orders.pricePerUnit)
    const totalQuantities = parseInt(orders.orderQuantity)

    const totalOrderPrice = perUnitPrice * totalQuantities

    return (
        <div>
            <br />
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col ">


                    <div class="card w-full bg-base-100 shadow-xl">
                        <div class="card-body font-bold">
                            <h2 class="card-title"> </h2>
                            <p className='font-bold'>Hellow, {orders.userName}  </p>
                            <p>Your Order: {orders.partsName} </p>
                            <p >Total Parts Quantity: <span className='text-red-900'>{orders.orderQuantity}</span> </p>
                            <p >Price/Unit: <span className='text-red-900'>{orders.pricePerUnit}</span> </p>
                            <p >Address: <span className='text-red-900'>{orders.address}</span> </p>
                            <p >phone: <span className='text-red-900'>{orders.phone}</span> </p>
                            <p>Please Pay Total : {totalOrderPrice} TK </p>
                            <div class="card-actions justify-end">

                            </div>
                        </div>


                    </div>


                    <div class="card w-full bg-pink-100 shadow-xl">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm orders={orders} />
                            </Elements>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;