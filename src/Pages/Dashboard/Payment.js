import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Payment = () => {
    const { id } = useParams();
    
    const url = `http://localhost:5000/orders/order/${id}`;

    
    const { data: orders, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        // headers: {
        //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Make Payment</h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {orders?.userName}</p>
                    <h2 class="card-title">Please Pay for {orders?.partsName}</h2>

                    <p>Please pay: ${orders?.pricePerUnit * orders?.orderQuantity}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;