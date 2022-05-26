// import React, { useEffect, useState } from 'react';

// const ManageAllOrders = () => {
//     const [orderList , setOrderList] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:5000/orders/order')
//             .then(res => res.json())
//             .then(data => setOrderList(data))
//     }, [])
//     return (
//         <div>
//             <h2> Manage All Order</h2>
            
//         </div>
//     );
// };

// export default ManageAllOrders;

import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderRow from './OrderRow';
import ProductRow from './ProductRow';

const ManageAllOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null);
    const {data: orderList, isLoading , refetch} = useQuery('orders', ()=>fetch('https://thawing-fortress-89625.herokuapp.com/orders/order').then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Product :{orderList.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Customer Name</th>
                            <th>Product Name</th>
                            <th>Order Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        orderList.map((order, index) => <OrderRow
                                key={order._key}
                                order={order}
                                index={index}
                                refetch={refetch}
                                setDeletingOrder={setDeletingOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingOrder && <DeleteConfirmModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageAllOrders;